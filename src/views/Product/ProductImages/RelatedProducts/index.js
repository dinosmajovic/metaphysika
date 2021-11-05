import { useHistory } from 'react-router-dom';
import { Title, RelatedProductsWrapper, RelatedProduct } from './styled';
import axios from 'axios';
import { errorPath } from 'constants/routes/index';

const RelatedProducts = ({ relatedProducts }) => {
  const history = useHistory();

  const onGoToRelatedProduct = async (relatedProduct) => {
    const brandId = relatedProduct.brandId;

    try {
      const brand = await axios.get('/getBrand', {
        params: {
          brandId
        }
      });

      history.push(`/brands/${brand.data.path}/${relatedProduct.path}`);
    } catch (error) {
      history.push(errorPath);
    }
  };

  if (relatedProducts) {
    return (
      relatedProducts.length > 0 && (
        <div>
          <Title>Related products</Title>
          <RelatedProductsWrapper>
            {relatedProducts.map((relatedProduct) => {
              return (
                <RelatedProduct
                  key={relatedProduct.path}
                  onClick={() => onGoToRelatedProduct(relatedProduct)}
                >
                  <img src={relatedProduct.mainImg} alt="Product" />
                </RelatedProduct>
              );
            })}
          </RelatedProductsWrapper>
        </div>
      )
    );
  } else {
    return null;
  }
};

export default RelatedProducts;
