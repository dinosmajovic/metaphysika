import { useHistory } from 'react-router-dom';
import { Title, RelatedProductsWrapper, RelatedProduct } from './styled';

const RelatedProducts = ({ relatedProducts }) => {
  const history = useHistory();

  const onGoToRelatedProduct = (brandPath, productPath) => {
    history.push(`${brandPath}${productPath}`);
  };
  return (
    relatedProducts.length > 0 && (
      <div>
        <Title>Related products</Title>
        <RelatedProductsWrapper>
          {relatedProducts.map((item) => {
            return (
              <RelatedProduct
                key={item.productPath}
                onClick={() =>
                  onGoToRelatedProduct(item.brandPath, item.productPath)
                }
              >
                <img src={item.defaultImage} alt="Product" />
              </RelatedProduct>
            );
          })}
        </RelatedProductsWrapper>
      </div>
    )
  );
};

export default RelatedProducts;
