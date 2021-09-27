import { CategoriesContainer, CategoryItem } from './styled';

const Categories = ({ categories, onCategoryClick }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem
          isClicked={category.isClicked}
          onClick={() => onCategoryClick(category.label, category.path)}
          key={category.label}
        >
          {category.label}
        </CategoryItem>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
