/* eslint-disable */
import { useEffect, useState } from 'react';
import ProductImages from './ProductImages';
import ProductInformations from './ProductInformations';
import { ProductContainer, Wrapper, ProductDataWrapper } from './styled';
import Backdrop from 'components/atoms/Backdrop/index';
import Modal from './Modal';
import { useParams } from 'react-router-dom';
import Loader from 'components/atoms/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductSuccess, clearProduct } from 'state/product';
import Error from 'views/Error';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(null);
  const { isError, isLoading, product, errorMessage } = useSelector(
    (state) => state.product
  );
  const { token, isAuthenticated } = useSelector((state) => state.user);

  const [options, setOptions] = useState([
    {
      label: 'Size',
      value: 'Select',
      values: [],
      isOpened: false
    },
    {
      label: 'Quantity',
      value: 1,
      values: [],
      isOpened: false
    }
  ]);

  useEffect(() => {
    return () => {
      dispatch(clearProduct());
    };
  }, []);

  useEffect(async () => {
    dispatch(getProduct({ productPath: params.productName, token }));
  }, [params.productName, isAuthenticated]);

  useEffect(() => {
    if (product) {
      const mappedImages = product.images.map((img) => {
        return {
          link: img,
          isClicked: false
        };
      });
      const sizes = product.sizes;
      const sizeNames = sizes.map((s) => {
        return s.name;
      });
      const newOptions = [...options];
      newOptions[0].values = sizeNames;
      newOptions[0].value = 'Select';
      newOptions[1].value = 1;
      setOptions(newOptions);
      setMainImage(product.mainImg);
      setImages(mappedImages);
      setIsInWishlist(product.isInWishlist);
      dispatch(getProductSuccess());
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

  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (isError) {
    return (
      <Error
        title={errorMessage.title}
        description={errorMessage.description}
      />
    );
  } else {
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
        <ProductDataWrapper>
          <ProductImages
            relatedProducts={product?.relatedProducts}
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
            setIsInWishlist={setIsInWishlist}
            isInWishlist={isInWishlist}
          />
        </ProductDataWrapper>
      </ProductContainer>
    );
  }
};

export default Product;
