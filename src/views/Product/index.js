import { useEffect, useState } from 'react';
import ProductImages from './ProductImages';
import ProductInformations from './ProductInformations';
import { ProductContainer, Wrapper } from './styled';
import Backdrop from 'components/atoms/Backdrop/index';
import Modal from './Modal';
import { useHistory, useParams } from 'react-router-dom';
import { errorPath } from 'constants/routes/index';
import axios from 'axios';
import Loader from 'components/atoms/Loader';

const Product = ({ path, id }) => {
  const history = useHistory();
  const params = useParams();

  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState(null);
  const [variants, setVariants] = useState(null);
  const [options, setOptions] = useState([
    {
      label: 'Size',
      value: 'Select',
      values: [],
      isOpened: false
    },
    {
      label: 'Quantity',
      value: '1',
      values: [],
      isOpened: false
    }
  ]);

  useEffect(() => {
    fetchProduct();
  }, [params.productName]);

  const fetchProduct = () => {
    const newOptions = [...options];
    newOptions[0].value = 'Select';
    newOptions[1].value = '1';
    setOptions(newOptions);

    setLoading(true);
    axios
      .get('/brands/brand/product', {
        params: {
          path: `/${params.productName}/`
        }
      })
      .then((res) => {
        let data = res;
        data = data.data.site.route.node;

        const product = {
          name: data.name,
          id: data.id,
          entityId: data.entityId,
          description: data.description,
          mainImg: data.defaultImage.urlOriginal,
          images: data.images.edges,
          price: data.prices.price.value,
          currencyCode: data.prices.price.currencyCode,
          oldPrice: data.prices.retailPrice?.value,
          path: data.path,
          brandPath: data.brand.path,
          productPath: `${data.brand.path}${data.path}`,
          relatedProducts: data.relatedProducts.edges.map((product) => {
            return {
              brandPath: product.node.brand.path,
              defaultImage: product.node.defaultImage.urlOriginal,
              productPath: product.node.path
            };
          })
        };

        const images = product.images.map((img) => {
          return {
            link: img.node.urlOriginal,
            isClicked: false
          };
        });

        setMainImage(product.mainImg);
        setImages(images);
        setProduct(product);
        fetchProductVariants(product.entityId);
      })
      .catch(function (error) {
        history.push(errorPath);
        setLoading(false);
      });
  };

  const fetchProductVariants = (productId) => {
    axios
      .get('/brands/brand/productvariants', {
        params: {
          productId
        }
      })
      .then((result) => {
        const variants = result.data.data.map((variant) => {
          return {
            id: variant.id,
            quantity: variant.inventory_level,
            size: variant.option_values[0].label
          };
        });

        const sizes = [];
        variants.forEach((variant) => {
          return variant.quantity > 0 ? sizes.push(variant.size) : null;
        });

        const newOptions = [...options];

        newOptions[0].values = sizes;

        setOptions(newOptions);
        setVariants(variants);
        setLoading(false);
      })

      .catch((error) => {
        history.push(errorPath);
      });
  };

  const onCloseDropdowns = (event) => {
    if (event.target.className.includes('dropdown')) {
      return null;
    } else {
      const newOptions = options.map((option) => {
        return {
          ...option,
          isOpened: false
        };
      });
      setOptions(newOptions);
    }
  };

  const onOpenModal = () => {
    setModalIsOpened(true);
  };

  const onCloseModal = () => {
    setModalIsOpened(false);
  };

  const onBackdropCloseModal = (event) => {
    event.target.className.includes('backdrop') && setModalIsOpened(false);
  };

  const onImageClick = (image) => {
    setMainImage(image);

    const clickedImageIndex = images.findIndex((item) => item.link === image);

    const newImages = images.map((item) => ({
      ...item,
      isClicked: false
    }));

    newImages[clickedImageIndex].isClicked = true;

    setImages(newImages);
  };

  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (product && variants) {
    return (
      <ProductContainer onClick={(event) => onCloseDropdowns(event)}>
        {modalIsOpened && (
          <Backdrop
            onBackdropCloseModal={(event) => onBackdropCloseModal(event)}
          >
            <Modal
              images={images}
              mainImage={mainImage}
              onImageClick={onImageClick}
              onCloseModal={onCloseModal}
            />
          </Backdrop>
        )}

        <ProductImages
          relatedProducts={product.relatedProducts}
          images={images}
          mainImage={mainImage}
          onOpenModal={onOpenModal}
          onImageClick={onImageClick}
        />
        <ProductInformations
          variants={variants}
          product={product}
          sizeIsSelected={false}
          options={options}
          setOptions={setOptions}
        />
      </ProductContainer>
    );
  }
};

export default Product;

// if (product && variants) {
