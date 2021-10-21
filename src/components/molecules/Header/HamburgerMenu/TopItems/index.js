import { useState } from 'react';
import {
  TopItemsWrapper,
  TopItemLink,
  ArrowItem,
  Brands,
  Brand
} from '../styled';
import filledArrowUp from 'assets/icons/filledArrowUp.svg';
import filledArrowDown from 'assets/icons/filledArrowDown.svg';

export const TopItems = ({ categories, brands, onMenuToggle }) => {
  const [brandIsClicked, setBrandIsClicked] = useState(false);

  const onBrand = () => {
    setBrandIsClicked(!brandIsClicked);
  };

  return (
    <TopItemsWrapper>
      <TopItemLink to="/" onClick={onMenuToggle}>
        Home
      </TopItemLink>
      <div>
        <ArrowItem onClick={onBrand} isOpen={brandIsClicked}>
          <span>Brands</span>
          <div>
            {brandIsClicked ? (
              <img alt="icon" src={filledArrowUp} />
            ) : (
              <img alt="icon" src={filledArrowDown} />
            )}
          </div>
        </ArrowItem>
        <Brands isOpen={brandIsClicked}>
          {brands?.map((b) => {
            return (
              <Brand
                key={b.path}
                onClick={onMenuToggle}
                to={`/brands/${b.path}`}
              >
                {b.name}
              </Brand>
            );
          })}
        </Brands>
      </div>
      {categories?.map((c) => {
        return (
          <TopItemLink
            onClick={onMenuToggle}
            key={c.path}
            to={`/categories/${c.path}`}
          >
            {c.name}
          </TopItemLink>
        );
      })}
    </TopItemsWrapper>
  );
};

export default TopItems;
