import { CategoriesContainer, CategoryItem } from './styled';

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories?.map((category) => (
        <CategoryItem key={category.path} to={`/categories/${category.path}`}>
          {category.name}
        </CategoryItem>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
