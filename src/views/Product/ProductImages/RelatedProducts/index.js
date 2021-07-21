import Link from 'next/link';
import { Title, RelatedProductsWrapper, RelatedProduct } from './styled';
import defaultImage from 'assets/images/default.png';

const RelatedProducts = ({ relatedProducts, brand, onRelatedProduct }) => {
  if (relatedProducts.length > 0) {
    return (
      <div>
        <Title>Related products</Title>
        <RelatedProductsWrapper>
          {relatedProducts.map((product) => {
            let image;
            if (product.node.defaultImage) {
              image = product.node.defaultImage.urlOriginal;
            } else {
              image = defaultImage;
            }
            return (
              <Link
                key={product.node.sku}
                href={`${brand}${product.node.path}`}
              >
                <RelatedProduct onClick={onRelatedProduct}>
                  <img src={image} alt="Product image" />
                </RelatedProduct>
              </Link>
            );
          })}
        </RelatedProductsWrapper>
      </div>
    );
  } else {
    return null;
  }
};

export default RelatedProducts;
