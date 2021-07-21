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
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const precentageDecrease = Math.round(
    ((product.price - product.oldPrice) / product.price) * 100
  );

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
        {product?.oldPrice && <Percentage>{precentageDecrease}%</Percentage>}

        <Link to="/">
          <Picture>
            <img src={product?.defaultImg} alt="Product" />
          </Picture>
        </Link>
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
