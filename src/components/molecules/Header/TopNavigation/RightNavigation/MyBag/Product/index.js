import transformProductName from 'constants/transformProductName';
import xIcon from 'assets/icons/modalClose.svg';
import {
  Wrapper,
  ProductWrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  DeleteWrapper,
  ProductOptions,
  ProductPrice
} from './styled';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'state/bag';

import shortenText from 'constants/reduceTitleLength';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { errorPath } from 'constants/routes';
import { API } from 'api';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onProductDelete = (bagId) => {
    dispatch(deleteProduct(bagId));
  };

  const onGoToProduct = async (product) => {
    const brandId = product.brandId;

    try {
      const brand = await axios.get(API + '/getBrand', {
        params: {
          brandId
        }
      });

      history.push(`/brands/${brand.data.path}/name=${product.path}`);
    } catch (error) {
      history.push(errorPath);
    }
  };

  return (
    <Wrapper>
      <DeleteWrapper onClick={() => onProductDelete(product.bagId)}>
        <img src={xIcon} alt="x icon" />
      </DeleteWrapper>
      <ProductWrapper onClick={() => onGoToProduct(product)}>
        <ProductImage>
          <img src={product.mainImg} alt="product" />
        </ProductImage>
        <ProductInfo>
          <ProductName>
            {shortenText(transformProductName(product.name), 14)}
          </ProductName>
          <ProductOptions>
            <span>Size: {product.size}</span>
            <span>Quantity: {product.quantity}</span>
          </ProductOptions>
          <ProductPrice>{product.price} BAM</ProductPrice>
        </ProductInfo>
      </ProductWrapper>
    </Wrapper>
  );
};

export default Product;
