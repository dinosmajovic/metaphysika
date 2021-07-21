import { CategoriesContainer, CategoryItem } from './styled';

const Categories = ({ categories, loading, onCategoryClick }) => {
  if (categories) {
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
  } else if (loading) {
    return null;
  }
};

export default Categories;
