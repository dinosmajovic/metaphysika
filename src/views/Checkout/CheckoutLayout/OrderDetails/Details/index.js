import { DetailsContainer, Title } from './styled';

import Product from 'components/atoms/Product';

const Details = ({ products }) => {
  return (
    <DetailsContainer>
      <Title>
        Order Details (<span>{products.length}</span>)
      </Title>
      <div>
        {products.map((p) => {
          return <Product key={p.bagId} product={p} type={'checkout'} />;
        })}
      </div>
    </DetailsContainer>
  );
};

export default Details;
