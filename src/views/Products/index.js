import { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { ProductsWrapper } from './styled';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductsGrid from './ProductsGrid';
import queryString from 'query-string';
import { errorPath } from 'constants/routes';
import Loader from 'components/atoms/Loader';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';
import { LoaderWrapper } from 'components/atoms/Loader/styledWrapper';
import useWindowSize from 'hooks/useWindowSize';

const Products = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const { pathname, search } = history.location;
  const queries = queryString.parse(location.search);
  const { brandName, categoryName, subcategoryName } = params || {};
  const { token, isAuthenticated } = useSelector((state) => state.user);
  const windowWidth = useWindowSize().width;

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [label, setLabel] = useState(null);
  const [filters, setFilters] = useState(null);
  const [viewAllPath, setViewAllPath] = useState(null);
  const [subcategories, setSubcategories] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [sortType, setSortType] = useState('creation-time-descending'); // eslint-disable-line
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

  useEffect(() => {
    fetchProducts();
  }, [pathname, search, isAuthenticated]); // eslint-disable-line

  useEffect(() => {
    const queryFilters = queryString.parse(location.search, {
      arrayFormat: 'comma'
    });

    const { page, sort, ...otherFilters } = queryFilters;

    if (typeof otherFilters.color === 'string') {
      otherFilters.color = convertStringIntoArray(otherFilters.color);
    }
    if (typeof otherFilters.size === 'string') {
      otherFilters.size = convertStringIntoArray(otherFilters.size);
    }
    if (typeof otherFilters.brand === 'string') {
      otherFilters.brand = convertStringIntoArray(otherFilters.brand);
    }

    if (otherFilters.brand) {
      getBrandNames(otherFilters.brand).then((result) => {
        otherFilters.brand = result;
      });
    }

    setAppliedFilters(otherFilters);
  }, [search]); // eslint-disable-line

  const convertStringIntoArray = (string) => {
    const arr = [];
    arr.push(string);

    return arr;
  };

  const getBrandNames = async (brandNames) => {
    try {
      const { data } = await axios.get('/getBrandNames', {
        params: {
          paths: brandNames
        }
      });

      return data;
    } catch (error) {
      history.push(errorPath);
    }
  };

  const fetchProducts = () => {
    if (categoryName && !subcategoryName) {
      getCategoryProducts();
    } else if (categoryName && subcategoryName) {
      // getProductsBySubcategory()
      console.log('fetch subcategory');
    } else if (brandName) {
      // getProductsByBrand();
      console.log('fetch brand');
    }
  };

  const getCategoryProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(`/products/category${search}`, {
        categoryName,
        token
      });

      data.allFilters &&
        (data.allFilters.brands = data.allFilters.brands =
          data.allFilters.brands.map((brand) => brand.name).sort());

      if (data.allFilters) {
        const filters = [
          {
            name: 'Size',
            label: 'size',
            isOpen: false,
            values: data.allFilters.sizes
          },
          {
            name: 'Brand',
            label: 'brand',
            isOpen: false,
            values: data.allFilters.brands
          },
          {
            name: 'Color',
            label: 'color',
            isOpen: false,
            values: data.allFilters.colors
          }
        ];

        setFilters(filters);
      } else {
        setFilters(null);
      }

      setLabel(data.categoryName);
      setProducts(data.products);
      setSubcategories(data.subcategories);
      setPagination(data.pagination);
      setViewAllPath(data.viewAllPath);
      setIsLoading(false);
    } catch {
      history.push(errorPath);
      setIsLoading(false);
    }
  };

  const closeSidebarDropdowns = () => {
    const closedDropdowns = filters.map((f) => {
      return {
        ...f,
        isOpen: false
      };
    });

    setFilters(closedDropdowns);
  };

  const onApplyFilters = async () => {
    setIsLoading(true);
    let filterQueryObject = {};

    if (windowWidth <= 1024) {
      closeSidebarDropdowns();
    }

    if (appliedFilters.size?.length > 0) {
      filterQueryObject.size = queryString.stringify(
        { size: appliedFilters.size },
        { arrayFormat: 'comma' }
      );
    }

    if (appliedFilters.brand?.length > 0) {
      try {
        const { data } = await axios.get('/getBrandLabel', {
          params: {
            names: appliedFilters.brand
          }
        });

        appliedFilters.brand = data;
      } catch (error) {
        history.push(errorPath);
        setIsLoading(false);
      }
      filterQueryObject.brand = queryString.stringify(
        { brand: appliedFilters.brand },
        { arrayFormat: 'comma' }
      );
    }

    if (appliedFilters.color?.length > 0) {
      filterQueryObject.color = queryString.stringify(
        { color: appliedFilters.color },
        { arrayFormat: 'comma' }
      );
    }

    let newQuery = '';

    if (queries.page) {
      newQuery = `&page=${queries.page}`;
    }

    if (queries.sort) {
      newQuery = `${newQuery}&sort=${queries.sort}`;
    }

    if (filterQueryObject.size) {
      newQuery = `${newQuery}&${filterQueryObject.size}`;
    }

    if (filterQueryObject.color) {
      newQuery = `${newQuery}&${filterQueryObject.color}`;
    }

    if (filterQueryObject.brand) {
      newQuery = `${newQuery}&${filterQueryObject.brand}`;
    }

    const fullPath = `${pathname}?${newQuery}`;
    history.push(fullPath);

    setIsLoading(false);
  };

  const paginate = (newPage) => {
    window.scrollTo(0, 0);

    if (categoryName && !subcategoryName) {
      history.push(`/categories/${categoryName}/${newPage}`);
    } else if (categoryName && subcategoryName) {
      history.push(
        `/categories/${categoryName}/subcategory=${subcategoryName}/${newPage}`
      );
    } else if (brandName) {
      history.push(`/brands/${brandName}/${newPage}`);
    }
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

    if (categoryName && !subcategoryName) {
      history.push(`/categories/${categoryName}/1`);
    } else if (categoryName && subcategoryName) {
      history.push(
        `/categories/${categoryName}/subcategory=${subcategoryName}/1`
      );
    } else if (brandName) {
      history.push(`/brands/${brandName}/1`);
    }
  };

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  } else {
    return (
      <ProductsWrapper>
        <Header
          label={label}
          sortOptions={sortOptions}
          onSortProducts={onSortProducts}
        />
        <Sidebar
          onApplyFilters={(filters) => onApplyFilters(filters)}
          subcategories={subcategories}
          viewAllPath={viewAllPath}
          appliedFilters={appliedFilters}
          filters={filters}
          setFilters={setFilters}
          setAppliedFilters={setAppliedFilters}
          queries={queries}
        />
        <ProductsGrid products={products} setIsLoading={setIsLoading} />
        <Pagination
          productsPerPage={pagination?.productsPerPage}
          totalProductsCount={pagination?.totalProductsCount}
          page={pagination?.page}
          paginate={paginate}
        />
      </ProductsWrapper>
    );
  }
};

export default Products;

// useEffect(() => {
//   const isCategoryChanged = false;
//   fetchProducts(isCategoryChanged, page, appliedFilters);
// }, [page, isAuthenticated]);

// useEffect(() => {
//   const isCategoryChanged = false;
//   fetchProducts(isCategoryChanged, page, appliedFilters);
// }, [page, isAuthenticated]);

// useEffect(() => {
//   const isCategoryChanged = true;
//   setAppliedFilters({});
//   fetchProducts(isCategoryChanged, page, {});
//   setFilters({});
// }, [brandName, categoryName, subcategoryName, isAuthenticated]); // eslint-disable-line

// if (categoryName && !subcategoryName) {
//   history.push(`/categories/${categoryName}/1`);
// } else if (categoryName && subcategoryName) {
//   history.push(
//     `/categories/${categoryName}/subcategory=${subcategoryName}/1`
//   );
// } else if (brandName) {
//   history.push(`/brands/${brandName}/1`);
// }

// const fetchProducts = (
//   isCategoryChanged,
//   currentPage = 1,
//   filters = {},
//   sortType = 'creation-time-descending'
// ) => {
//   setIsLoading(true);

//   if (categoryName && !subcategoryName) {
//     getProductsByCategory(isCategoryChanged, currentPage, filters, sortType);
//   } else if (categoryName && subcategoryName) {
//     getProductsBySubcategory(
//       isCategoryChanged,
//       currentPage,
//       filters,
//       sortType
//     );
//   } else if (brandName) {
//     getProductsByBrand(isCategoryChanged, currentPage, filters, sortType);
//   }
// };

// const getProductsBySubcategory = async (
//   isCategoryChanged,
//   currentPage,
//   filters,
//   sortType
// ) => {
//   try {
//     let result = await axios.post('/products/subcategory', {
//       subcategoryName,
//       categoryName,
//       orderType: 'default',
//       currentPage,
//       productsPerPage,
//       isCategoryChanged,
//       filters,
//       sortType,
//       token
//     });
//     // setViewAllPath(result.data.path);
//     label = result.data.subcategoryName;
//     setProducts(result.data.products);
//     totalProductsCount = result.data.totalProductsCount;

//     if (result.data.subcategories) {
//       subcategories = result.data.subcategories;
//     }

//     if (result.data.allFilters) {
//       const fetchedFilters = result.data.allFilters;

//       const brandNames = fetchedFilters.brands
//         .map((brand) => {
//           return brand.name;
//         })
//         .sort();

//       const newFilters = [...allFilters];

//       newFilters[0].filters = fetchedFilters.sizes;
//       newFilters[1].filters = brandNames;
//       newFilters[2].filters = fetchedFilters.colors;

//       setAllFilters(newFilters);
//       setFilters(result.data.allFilters);
//     }

//     setIsLoading(false);
//   } catch (error) {
//     history.push(errorPath);
//   }
// };

// const getProductsByBrand = async (
//   isCategoryChanged,
//   currentPage,
//   filters,
//   sortType
// ) => {
//   subcategories = false;
//   try {
//     let result = await axios.post('/products/brand', {
//       brandName,
//       orderType: 'default',
//       currentPage,
//       productsPerPage,
//       isCategoryChanged,
//       filters,
//       sortType,
//       token
//     });

//     label = result.data.brandName;
//     setProducts(result.data.products);
//     totalProductsCount = result.data.totalProductsCount;

//     if (result.data.allFilters) {
//       const fetchedFilters = result.data.allFilters;

//       const brandNames = fetchedFilters.brands
//         .map((brand) => {
//           return brand.name;
//         })
//         .sort();

//       const newFilters = [...allFilters];

//       newFilters[0].filters = fetchedFilters.sizes;
//       newFilters[1].filters = brandNames;
//       newFilters[2].filters = fetchedFilters.colors;

//       setAllFilters(newFilters);
//       setFilters(result.data.allFilters);
//     }

//     setIsLoading(false);
//   } catch (error) {
//     history.push(errorPath);
//   }
// };
