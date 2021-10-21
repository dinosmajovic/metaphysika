import {
  Dropdown,
  Label,
  Menu,
  ArrowUp,
  BrandName,
  HoverHelpLine
} from './styled';

const BrandsDropdown = ({ brands }) => {
  return (
    <Dropdown>
      <Label>{brands ? 'Brands' : ''}</Label>
      <Menu>
        <ArrowUp />
        <HoverHelpLine />
        {brands?.map((brand) => (
          <BrandName key={brand.path} to={`/brands/${brand.path}`}>
            {brand.name}
          </BrandName>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default BrandsDropdown;
