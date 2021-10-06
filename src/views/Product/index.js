import { useEffect, useState } from 'react';
import ProductImages from './ProductImages';
import ProductInformations from './ProductInformations';
import { ProductContainer, Wrapper } from './styled';
import Backdrop from 'components/atoms/Backdrop/index';
import Modal from './Modal';
import { Redirect, useParams } from 'react-router-dom';
import Loader from 'components/atoms/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from 'state/product';
import { setProduct } from 'state/product';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState(null);
  const product = useSelector((state) => state.product.product);
  const isError = useSelector((state) => state.product.isError);
  const relatedProducts = useSelector((state) => state.product.relatedProducts);
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setProduct(null));
    setLoading(true);
    setMainImage(null);
    setImages(null);
    dispatch(fetchProduct(params.productName));
  }, [params.productName]);

  useEffect(() => {
    if (product) {
      const mappedImages = product.data.images.map((img) => {
        return {
          link: img,
          isClicked: false
        };
      });

      const sizes = product.data.sizes;
      const sizeNames = sizes.map((s) => {
        return s.name;
      });

      const newOptions = [...options];

      newOptions[0].values = sizeNames;
      newOptions[0].value = 'Select';
      newOptions[1].value = '1';

      setOptions(newOptions);
      setMainImage(product.data.mainImg);
      setImages(mappedImages);
      setLoading(false);
    }
  }, [product]);

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

  const onBackdropClick = (event) => {
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

  if (product && images) {
    return (
      <ProductContainer onClick={(event) => onCloseDropdowns(event)}>
        {modalIsOpened && (
          <Backdrop onBackdropClick={(event) => onBackdropClick(event)}>
            <Modal
              images={images}
              mainImage={mainImage}
              onImageClick={onImageClick}
              onCloseModal={onCloseModal}
            />
          </Backdrop>
        )}
        <ProductImages
          relatedProducts={relatedProducts}
          images={images}
          mainImage={mainImage}
          onOpenModal={onOpenModal}
          onImageClick={onImageClick}
        />
        <ProductInformations
          product={product.data}
          sizeIsSelected={false}
          options={options}
          setOptions={setOptions}
        />
      </ProductContainer>
    );
  } else if (isError) {
    return <Redirect to="/404" />;
  } else {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }
};

export default Product;

// @media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
// @media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
// @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
// @media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }
