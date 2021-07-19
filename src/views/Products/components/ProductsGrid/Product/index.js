import { ProductContainer, Picture, Heart, Label, PictureContainer } from './styled';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import likeHeartFilled from 'assets/icons/likeHeart/likeHeartFilled.svg';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
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
        <Link to="/">
          <Picture>
            <img src={product?.defaultImg} alt="Product" />
          </Picture>
        </Link>
      </PictureContainer>
      <Label>{product?.name}</Label>
      <p>{`${product?.price} ${product?.currencyCode}`}</p>
    </ProductContainer>
  );
};

export default Product;
