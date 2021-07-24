import {
  ProductContainer,
  Picture,
  Heart,
  Label,
  PictureContainer,
  PriceContainer,
  OldPrice,
  Price,
  Percentage
} from './styled';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import likeHeartFilled from 'assets/icons/likeHeart/likeHeartFilled.svg';
import { useHistory } from 'react-router-dom';
import calculatePrecentage from 'constants/calculatePrecentage';

const Product = ({ product }) => {
  const history = useHistory();

  const precentageDecrease = calculatePrecentage(
    product.price,
    product.oldPrice
  );

  const onGoToProduct = (productPath, brandPath) => {
    history.push(`${brandPath}${productPath}`);
  };

  return (
    <ProductContainer>
      <PictureContainer>
        <Heart onClick={() => {}}>
          {false ? (
            <img src={likeHeartFilled} alt="Heart icon" />
          ) : (
            <img src={likeHeartOutlined} alt="Heart icon" />
          )}
        </Heart>
        {product?.oldPrice && (
          <Percentage>
            <span> {precentageDecrease}%</span>
          </Percentage>
        )}

        <Picture onClick={() => onGoToProduct(product.path, product.brandPath)}>
          <img src={product?.defaultImg} alt="Product" />
        </Picture>
      </PictureContainer>
      <Label>{product?.name}</Label>
      <PriceContainer>
        {product?.oldPrice && (
          <OldPrice>{`${product?.oldPrice} ${product?.currencyCode}`}</OldPrice>
        )}
        <Price>{`${product?.price} ${product?.currencyCode}`}</Price>
      </PriceContainer>
    </ProductContainer>
  );
};

export default Product;
