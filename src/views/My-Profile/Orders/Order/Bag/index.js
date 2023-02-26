import {
  Container,
  Product,
  ProductImage,
  ProductDetails,
  Stock
} from './styled';
import transformProductName from 'constants/transformProductName';
import shortenText from 'constants/reduceTitleLength';

const Bag = ({ products }) => {
  return (
    <Container>
      {products.map((product) => {
        return (
          <Product key={product.bagId}>
            <ProductImage>
              <img src={product.mainImg} alt="product" />
            </ProductImage>
            <ProductDetails>
              <h1>{shortenText(transformProductName(product.name), 30)}</h1>
              <Stock>
                <span>Size: {product.size}</span>
                <span>Quantity: {product.quantity}</span>
              </Stock>
              <h2>{product.price} KM</h2>
            </ProductDetails>
          </Product>
        );
      })}
    </Container>
  );
};

export default Bag;
