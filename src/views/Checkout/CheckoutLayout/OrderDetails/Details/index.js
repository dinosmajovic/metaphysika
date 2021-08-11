import { DetailsContainer, Title } from './styled';

import Product from 'components/atoms/Product';

const Details = ({ products }) => {
  return (
    <DetailsContainer>
      <Title>
        Order Details (<span>{products.length}</span>)
      </Title>
      <div>
        {products.map((p) => (
          <Product key={p.sku} product={p} type={'checkout'} />
        ))}
      </div>
    </DetailsContainer>
  );
};

export default Details;
