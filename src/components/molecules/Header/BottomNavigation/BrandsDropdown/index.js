import {
  Dropdown,
  Label,
  Menu,
  ArrowUp,
  BrandName,
  HoverHelpLine
} from './styled';

const BrandsDropdown = ({ brands, onBrandClick, brandIsClicked }) => {
  return (
    <Dropdown>
      <Label brandIsClicked={brandIsClicked}>Brands</Label>
      <Menu>
        <ArrowUp />
        <HoverHelpLine />
        {brands.map((brand) => (
          <BrandName
            isClicked={brand.isClicked}
            key={brand.label}
            onClick={() => onBrandClick(brand.label, brand.path)}
          >
            {brand.label}
          </BrandName>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default BrandsDropdown;
