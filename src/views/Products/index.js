import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ProductsWrapper, Wrapper } from './styled';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductsGrid from './ProductsGrid';
import { errorPath } from 'constants/routes';
import Loader from 'components/atoms/Loader';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const history = useHistory();
  const params = useParams();
  const { brandName, categoryName, subcategoryName } = params || {};
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProductsCount, setTotalProductsCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [label, setLabel] = useState(null);
  const [subcategories, setSubcategories] = useState(null);
  const [filters, setFilters] = useState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  const [sortType, setSortType] = useState('creation-time-descending');
  const productsPerPage = 24;
  const [sortOptions, setSortOptions] = useState([
    {
      label: 'Newest to oldest',
      sortType: 'creation-time-descending',
      isClicked: true
    },
    {
      label: 'Oldest to newest',
      sortType: 'creation-time-ascending',
      isClicked: false
    },
    {
      label: 'Price high to low',
      sortType: 'price-high-to-low',
      isClicked: false
    },
    {
      label: 'Price low to high',
      sortType: 'price-low-to-high',
      isClicked: false
    }
  ]);
  const [allFilters, setAllFilters] = useState([
    {
      name: 'size',
      label: 'SIZE',
      filters: [],
      isOpen: false
    },
    {
      name: 'brand',
      label: 'BRAND',
      filters: [],
      isOpen: false
    },
    {
      name: 'color',
      label: 'COLOR',
      filters: [],
      isOpen: false
    }
  ]);
  const { token, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    const isCategoryChanged = true;
    setAppliedFilters({});
    setCurrentPage(1);
    setLoading(true);
    fetchProducts(isCategoryChanged, 1, {});
  }, [params, isAuthenticated]);

  const fetchProducts = (
    isCategoryChanged,
    currentPage = 1,
    filters = {},
    sortType = 'creation-time-descending'
  ) => {
    if (categoryName && !subcategoryName) {
      getProductsByCategory(isCategoryChanged, currentPage, filters, sortType);
    } else if (categoryName && subcategoryName) {
      getProductsBySubcategory(
        isCategoryChanged,
        currentPage,
        filters,
        sortType
      );
    } else if (brandName) {
      getProductsByBrand(isCategoryChanged, currentPage, filters, sortType);
    }
  };

  const getProductsByCategory = async (
    isCategoryChanged,
    currentPage,
    filters,
    sortType
  ) => {
    try {
      let result = await axios.post('/products/category', {
        categoryName,
        orderType: 'default',
        currentPage,
        productsPerPage,
        isCategoryChanged,
        filters,
        sortType,
        token
      });

      setLabel(result.data.categoryName);
      setProducts(result.data.products);
      setTotalProductsCount(result.data.totalProductsCount);

      if (result.data.subcategories) {
        setSubcategories(result.data.subcategories);
      }

      if (result.data.allFilters) {
        const fetchedFilters = result.data.allFilters;

        const brandNames = fetchedFilters.brands
          .map((brand) => {
            return brand.name;
          })
          .sort();

        const newFilters = [...allFilters];

        newFilters[0].filters = fetchedFilters.sizes;
        newFilters[1].filters = brandNames;
        newFilters[2].filters = fetchedFilters.colors;

        setAllFilters(newFilters);
        setFilters(result.data.allFilters);
      }

      setLoading(false);
    } catch (error) {
      history.push(errorPath);
    }
  };

  const getProductsBySubcategory = async (
    isCategoryChanged,
    currentPage,
    filters,
    sortType
  ) => {
    try {
      let result = await axios.post('/products/subcategory', {
        subcategoryName,
        categoryName,
        orderType: 'default',
        currentPage,
        productsPerPage,
        isCategoryChanged,
        filters,
        sortType
      });

      setLabel(result.data.subcategoryName);
      setProducts(result.data.products);
      setTotalProductsCount(result.data.totalProductsCount);

      if (result.data.allFilters) {
        const fetchedFilters = result.data.allFilters;

        const brandNames = fetchedFilters.brands
          .map((brand) => {
            return brand.name;
          })
          .sort();

        const newFilters = [...allFilters];

        newFilters[0].filters = fetchedFilters.sizes;
        newFilters[1].filters = brandNames;
        newFilters[2].filters = fetchedFilters.colors;

        setAllFilters(newFilters);
        setFilters(result.data.allFilters);
      }

      setLoading(false);
    } catch (error) {
      history.push(errorPath);
    }
  };

  const getProductsByBrand = async (
    isCategoryChanged,
    currentPage,
    filters,
    sortType
  ) => {
    try {
      let result = await axios.post('/products/brand', {
        brandName,
        orderType: 'default',
        currentPage,
        productsPerPage,
        isCategoryChanged,
        filters,
        sortType
      });

      setLabel(result.data.brandName);
      setProducts(result.data.products);
      setTotalProductsCount(result.data.totalProductsCount);

      if (result.data.allFilters) {
        const fetchedFilters = result.data.allFilters;

        const brandNames = fetchedFilters.brands
          .map((brand) => {
            return brand.name;
          })
          .sort();

        const newFilters = [...allFilters];

        newFilters[0].filters = fetchedFilters.sizes;
        newFilters[1].filters = brandNames;
        newFilters[2].filters = fetchedFilters.colors;

        setAllFilters(newFilters);
        setFilters(result.data.allFilters);
      }

      setLoading(false);
    } catch (error) {
      history.push(errorPath);
    }
  };

  const onApplyFilters = (filters) => {
    const isCategoryChanged = false;
    setCurrentPage(1);
    setAppliedFilters(filters);
    fetchProducts(isCategoryChanged, 1, filters);
  };

  const paginate = (currentPage) => {
    window.scrollTo(0, 0);
    const isCategoryChanged = false;
    fetchProducts(isCategoryChanged, currentPage, appliedFilters);
    setCurrentPage(currentPage);
  };

  const onSortProducts = (sortType) => {
    const newSortOptions = sortOptions.map((option) => {
      return {
        ...option,
        isClicked: option.sortType === sortType ? true : false
      };
    });

    setSortOptions(newSortOptions);
    setSortType(sortType);
    fetchProducts(false, 1, {}, sortType);
  };

  const onCloseFilters = (event) => {
    if (!event.target.className.includes('sidebar')) {
      const newFilters = allFilters.map((filter) => {
        return {
          ...filter,
          isOpen: false
        };
      });

      setAllFilters(newFilters);
    }
  };

  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    return (
      <ProductsWrapper onClick={(event) => onCloseFilters(event)}>
        <Header
          label={label}
          sortOptions={sortOptions}
          onSortProducts={onSortProducts}
        />
        <Sidebar
          onApplyFilters={(filters) => onApplyFilters(filters)}
          filters={filters}
          subcategories={subcategories}
          setSubcategories={setSubcategories}
          setAllFilters={setAllFilters}
          allFilters={allFilters}
        />
        <ProductsGrid products={products} setLoading={setLoading} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProductsCount={totalProductsCount}
          currentPage={currentPage}
          paginate={paginate}
        />
      </ProductsWrapper>
    );
  }
};

export default Products;
