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
import getUniqueChars from 'constants/getUniqueChars';

/* eslint-disable */
const Products = () => {
  const history = useHistory();
  const params = useParams();

  const { brandName, categoryName, subCategoryName } = params || {};
  const [loading, setLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);
  const [numberOfRequests, setNumberOfRequests] = useState(null);
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [endCursor, setEndCursor] = useState(null);
  const [totalProductsCount, setTotalProductsCount] = useState(null);
  const [products, setProducts] = useState(null);
  const [displayProducts, setDisplayProducts] = useState(null);
  const [subCategories, setSubCategories] = useState(null);
  const [filters, setFilters] = useState({
    sizes: [],
    brands: [],
    colors: []
  });

  useEffect(() => {
    fetchProducts();
  }, [params]);

  useEffect(() => {
    if (count > 0 && count <= numberOfRequests) {
      getProducts();
    }
  }, [count]);

  useEffect(() => {
    if (totalProductsCount == productsList.length) {
      // reverse products list from last to first
      let newProducts = [...productsList];
      newProducts.reverse();

      // GET AND SET FILTERS
      const allBrands = newProducts.map((product) => product.brand);
      const uniqueBrands = getUniqueChars(allBrands).sort();

      const allColors = newProducts.map((product) => product.color);
      const uniqueColors = getUniqueChars(allColors).sort();

      const allSizes = newProducts.map((product) => product.sizes);
      const concatAllSizes = Array.prototype.concat.apply([], allSizes);
      const uniqueSizes = getUniqueChars(concatAllSizes).sort();

      const newFilters = {
        ...filters
      };
      newFilters.sizes = uniqueSizes;
      newFilters.colors = uniqueColors;
      newFilters.brands = uniqueBrands;

      setFilters(newFilters);
      setProducts(newProducts);
      setDisplayProducts(newProducts);
      setLoading(false);
    }
  }, [productsList]);

  const fetchProducts = () => {
    if (categoryName && !subCategoryName) {
      setCurrentPage(1);
      setLoading(true);
      setProductsList([]);
      setEndCursor('');

      axios
        .get('/categories/products', {
          params: {
            cursor: '',
            path: `/categories/${categoryName}`,
            quantity: 1
          }
        })
        .then((result) => {
          const categoryId = result.data.site.route.node.entityId;
          const label = result.data.site.route.node.name;

          setLabel(label);

          axios
            .get('/categories/category/subcategoryList', {
              params: {
                categoryId
              }
            })
            .then((res) => {
              const subCategories = res.data.site.categoryTree[0].children.map(
                (subCategory) => {
                  return {
                    ...subCategory,
                    isClicked: false
                  };
                }
              );
              setSubCategories(subCategories);
            })
            .catch((err) => {
              history.push(errorPath);
              setLoading(false);
            })
            .then(() => {
              axios
                .get('/categories/products/count', {
                  params: {
                    categoryId
                  }
                })
                .then((res) => {
                  const totalProductsCount = res.data.meta.pagination.total;
                  const productsPerRequest = 50;

                  setTotalProductsCount(totalProductsCount);

                  const numberOfRequests = Math.ceil(
                    totalProductsCount / productsPerRequest
                  );

                  if (numberOfRequests > 0) {
                    setNumberOfRequests(numberOfRequests);
                    setCount(1);
                  } else {
                    setProductsList([]);
                    setLoading(false);
                  }
                })
                .catch((error) => {
                  history.push(errorPath);
                  setLoading(false);
                });
            });
        })
        .catch((error) => {
          history.push(errorPath);
          setLoading(false);
        });
    } else if (categoryName && subCategoryName) {
      setCurrentPage(1);
      setLoading(true);
      setProductsList([]);
      setEndCursor('');

      axios
        .get('/categories/products', {
          params: {
            cursor: '',
            path: `/categories/${categoryName}/${subCategoryName}`,
            quantity: 1
          }
        })
        .then((result) => {
          const categoryId = result.data.site.route.node.entityId;
          const label = result.data.site.route.node.name;

          setLabel(label);

          axios
            .get('/categories/products/count', {
              params: {
                categoryId
              }
            })
            .then((res) => {
              const totalProductsCount = res.data.meta.pagination.total;
              const productsPerRequest = 50;

              setTotalProductsCount(totalProductsCount);

              const numberOfRequests = Math.ceil(
                totalProductsCount / productsPerRequest
              );

              if (numberOfRequests > 0) {
                setNumberOfRequests(numberOfRequests);
                setCount(1);
              } else {
                setProductsList([]);
                setLoading(false);
              }
            })
            .catch((error) => {
              history.push(errorPath);
              setLoading(false);
            });
        });
    } else if (brandName) {
      setLoading(true);
      setCurrentPage(1);
      setProductsList([]);
      setEndCursor('');

      axios
        .get('/brands/products', {
          params: {
            cursor: '',
            path: `/brands/${brandName}`,
            quantity: 1
          }
        })
        .then((result) => {
          const brandId = result.data.site.route.node.entityId;
          const label = result.data.site.route.node.name;
          setLabel(label);

          axios
            .get('/brands/products/count', {
              params: {
                brandId
              }
            })
            .then((res) => {
              const totalProductsCount = res.data.meta.pagination.total;
              const productsPerRequest = 50;

              setTotalProductsCount(totalProductsCount);

              const numberOfRequests = Math.ceil(
                totalProductsCount / productsPerRequest
              );

              if (numberOfRequests > 0) {
                setNumberOfRequests(numberOfRequests);
                setCount(1);
              } else {
                setProductsList([]);
                setLoading(false);
              }
            })
            .catch((error) => {
              history.push(errorPath);
              setLoading(false);
            });
        })
        .catch(function (error) {
          history.push(errorPath);
          setLoading(false);
        });
    }
  };

  const getProducts = () => {
    if (categoryName && !subCategoryName) {
      setLoading(true);
      axios
        .get('/categories/products', {
          params: {
            cursor: endCursor,
            path: `/categories/${categoryName}`,
            quantity: 50
          }
        })

        .then((res) => {
          const data = res.data.site.route.node;
          setEndCursor(data.products.pageInfo.endCursor);

          const products = {
            productsList: data.products.edges.map((product) => {
              return {
                id: product.node.id,
                name: product.node.name,
                brandPath: product.node.brand.path,
                path: product.node.path,
                mainImg: product.node.defaultImage.urlOriginal,
                currencyCode: product.node.prices.price.currencyCode,
                description: product.node.description,
                price: product.node.prices.price.value,
                oldPrice: product.node.prices.retailPrice
                  ? product.node.prices.retailPrice.value
                  : false,
                brand: product.node.brand.name,
                color: product.node.customFields.edges[0].node.value,
                sizes: product.node.variants.edges.map((size) => {
                  return size.node.options.edges[0].node.values.edges[0].node
                    .label;
                })
              };
            })
          };

          const extendedArr = productsList.concat(products.productsList);

          const newCount = count + 1;

          setProductsList(extendedArr);
          setCount(newCount);
        })
        .catch((error) => {
          history.push(errorPath);
          setLoading(false);
        });
    } else if (categoryName && subCategoryName) {
      setLoading(true);
      axios
        .get('/categories/products', {
          params: {
            cursor: endCursor,
            path: `/categories/${categoryName}/${subCategoryName}`,
            quantity: 50
          }
        })

        .then((res) => {
          const data = res.data.site.route.node;
          setEndCursor(data.products.pageInfo.endCursor);

          const products = {
            productsList: data.products.edges.map((product) => {
              return {
                id: product.node.id,
                name: product.node.name,
                brandPath: product.node.brand.path,
                path: product.node.path,
                mainImg: product.node.defaultImage.urlOriginal,
                currencyCode: product.node.prices.price.currencyCode,
                description: product.node.description,
                price: product.node.prices.price.value,
                oldPrice: product.node.prices.retailPrice
                  ? product.node.prices.retailPrice.value
                  : false,
                brand: product.node.brand.name,
                color: product.node.customFields.edges[0].node.value,
                sizes: product.node.variants.edges.map((size) => {
                  return size.node.options.edges[0].node.values.edges[0].node
                    .label;
                })
              };
            })
          };

          const extendedArr = productsList.concat(products.productsList);

          const newCount = count + 1;

          setProductsList(extendedArr);
          setCount(newCount);
        })
        .catch((error) => {
          history.push(errorPath);
          setLoading(false);
        });
    } else if (brandName) {
      setLoading(true);
      axios
        .get('/brands/products', {
          params: {
            cursor: endCursor,
            path: `/brands/${brandName}`,
            quantity: 50
          }
        })

        .then((res) => {
          const data = res.data.site.route.node;
          setEndCursor(data.products.pageInfo.endCursor);
          const products = {
            productsList: data.products.edges.map((product) => {
              return {
                id: product.node.id,
                name: product.node.name,
                brandPath: product.node.brand.path,
                path: product.node.path,
                mainImg: product.node.defaultImage.urlOriginal,
                currencyCode: product.node.prices.price.currencyCode,
                description: product.node.description,
                price: product.node.prices.price.value,
                oldPrice: product.node.prices.retailPrice
                  ? product.node.prices.retailPrice.value
                  : false,
                brand: product.node.brand.name,
                color: product.node.customFields.edges[0].node.value,
                sizes: product.node.variants.edges.map((size) => {
                  return size.node.options.edges[0].node.values.edges[0].node
                    .label;
                })
              };
            })
          };
          const extendedArr = productsList.concat(products.productsList);
          const newCount = count + 1;
          setProductsList(extendedArr);
          setCount(newCount);
        })
        .catch((error) => {
          history.push(errorPath);
          setLoading(false);
        });
    }
  };

  const filterProductsBySize = (products, sizes) => {
    const filteredProducts = sizes.map((size) => {
      return products.filter((product) => {
        return product.sizes.some((productSize) => {
          return productSize === size;
        });
      });
    });

    let filteredProductsArray = [].concat.apply([], filteredProducts);

    filteredProductsArray = filteredProductsArray.filter((product, pos) => {
      return filteredProductsArray.indexOf(product) === pos;
    });

    return filteredProductsArray;
  };

  const onApplyFilters = (appliedFilters) => {
    setCurrentPage(1);
    let newProducts;

    // checks if filter exist
    const values = Object.values(appliedFilters);
    const isNoFilter = values.every((value) => {
      return value.length === 0;
    });
    isNoFilter && setDisplayProducts(products);

    if (appliedFilters.brand?.length > 0) {
      const filteredProducts = appliedFilters.brand.map((brand) => {
        return products.filter((product) => {
          return product.brand === brand;
        });
      });
      const filteredProductsArray = Array.prototype.concat.apply(
        [],
        filteredProducts
      );

      newProducts = filteredProductsArray;

      setDisplayProducts(newProducts);
    }

    if (appliedFilters.size?.length > 0) {
      if (newProducts) {
        const filteredProducts = filterProductsBySize(
          newProducts,
          appliedFilters.size
        );
        newProducts = filteredProducts;
        setDisplayProducts(newProducts);
      } else {
        const filteredProducts = filterProductsBySize(
          products,
          appliedFilters.size
        );
        newProducts = filteredProducts;
        setDisplayProducts(newProducts);
      }
    }

    if (appliedFilters.color?.length > 0) {
      if (newProducts) {
        const filteredProducts = appliedFilters.color.map((color) => {
          return newProducts.filter((product) => {
            return product.color === color;
          });
        });
        const filteredProductsArray = Array.prototype.concat.apply(
          [],
          filteredProducts
        );
        newProducts = filteredProductsArray;
        setDisplayProducts(newProducts);
      } else {
        const filteredProducts = appliedFilters.color.map((color) => {
          return products.filter((product) => {
            return product.color === color;
          });
        });
        const filteredProductsArray = Array.prototype.concat.apply(
          [],
          filteredProducts
        );
        newProducts = filteredProductsArray;
        setDisplayProducts(newProducts);
      }
    }
  };

  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    // Get current posts

    const indexOfLastProduct = currentPage * postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    const currentProducts = displayProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    //  Change page
    const paginate = (pageNumber) => {
      window.scrollTo(0, 0);
      setCurrentPage(pageNumber);
    };

    return (
      <ProductsWrapper>
        <Header
          label={label}
          productsList={productsList}
          setProductsList={setProductsList}
        />
        <Sidebar
          filters={filters}
          onApplyFilters={(appliedFilters) => onApplyFilters(appliedFilters)}
          categoryName={categoryName}
          subCategories={subCategories}
          setSubCategories={setSubCategories}
        />
        <ProductsGrid
          products={currentProducts}
          subCategories={subCategories}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={displayProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </ProductsWrapper>
    );
  }
};

export default Products;
