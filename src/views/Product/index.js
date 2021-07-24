import { useEffect, useState } from 'react';
import ProductImages from './ProductImages';
import ProductInformations from './ProductInformations';
import { ProductContainer } from './styled';
import Backdrop from 'components/atoms/Backdrop/index';
import { PRODUCT } from './consts';
import Modal from './Modal/index';

const Product = ({ path, id }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [options, setOptions] = useState([
    {
      label: 'Size',
      value: 'Select',
      values: [''],
      isOpened: false
    },
    {
      label: 'Quantity',
      value: '1',
      values: [''],
      isOpened: false
    }
  ]);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    setTimeout(() => {
      const eidtedProduct = {
        ...PRODUCT,
        images: PRODUCT.images.map((img) => ({ img, isClicked: false }))
      };

      const newOptions = options.map((option) => {
        if (option.label === 'Size') {
          return {
            ...option,
            values: PRODUCT.sizes
          };
        }
        if (option.label === 'Quantity') {
          return {
            ...option,
            values: PRODUCT.quantity
          };
        }
      });

      setImages(eidtedProduct.images);
      setMainImage(eidtedProduct.mainImg);
      setOptions(newOptions);
      setProduct(eidtedProduct);
      setLoading(false);
    }, 300);
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

    const clickedImageIndex = images.findIndex((item) => item.img === image);

    const newImages = images.map((item) => ({
      ...item,
      isClicked: false
    }));

    newImages[clickedImageIndex].isClicked = true;

    setImages(newImages);
  };

  if (product) {
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
          product={product}
          sizeIsSelected={false}
          options={options}
          setOptions={setOptions}
        />
      </ProductContainer>
    );
  } else if (loading) {
    return <div>loading</div>;
  }
};

export default Product;
