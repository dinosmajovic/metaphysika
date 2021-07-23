import { Title, RelatedProductsWrapper, RelatedProduct } from './styled';

const RelatedProducts = ({ relatedProducts }) => {
  return (
    relatedProducts.length > 0 && (
      <div>
        <Title>Related products</Title>
        <RelatedProductsWrapper>
          {relatedProducts.map((product) => {
            return (
              <RelatedProduct key={product}>
                <img src={product} alt="Product" />
              </RelatedProduct>
            );
          })}
        </RelatedProductsWrapper>
      </div>
    )
  );
};

export default RelatedProducts;
