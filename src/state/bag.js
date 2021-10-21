import { createSlice } from '@reduxjs/toolkit';

export const bag = createSlice({
  name: 'bag',
  initialState: {
    products: [],
    subtotal: 0,
    total: 0,
    deliveryPrice: 0,
    error: false
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },

    setError: (state, { payload }) => {
      state.error = payload;
    },

    calculateSubtotal: (state, { payload }) => {
      const subtotalCount = state.products
        .map((product) => {
          if (product.quantity === 1) {
            return product.price;
          } else {
            return product.price * product.quantity;
          }
        })
        .reduce((a, b) => a + b, 0);
      state.subtotal = subtotalCount;
    },

    setTotal: (state, { payload }) => {
      state.total = payload;
    },

    setDeliveryPrice: (state, { payload }) => {
      state.deliveryPrice = payload;
    },

    setSubtotal: (state, { payload }) => {
      state.subtotal = payload;
    },

    resetBag: (state, { payload }) => {
      state.subtotal = 0;
      state.total = 0;
      state.deliveryPrice = 0;
      state.products = [];
      state.error = false;
    }
  }
});

const { actions } = bag;

export const addProduct = (product) => (dispatch, getState, setState) => {
  const state = getState().bag;

  const bagProducts = [...state.products];

  const earlierAddedProduct = bagProducts.filter(
    (p) => p.id === product.id && p.size === product.size
  )[0];

  if (!earlierAddedProduct) {
    bagProducts.push(product);
    dispatch(actions.setProducts(bagProducts));
    dispatch(actions.calculateSubtotal());
    dispatch(actions.setError('ADDED'));
  } else {
    const totalStock = product.sizes.filter(
      (size) => size.name === product.size
    )[0].stock;

    const earlierAddedStock = earlierAddedProduct.quantity;

    const stockForAdding = product.quantity;

    if (totalStock >= earlierAddedStock + stockForAdding) {
      const { bagId } = earlierAddedProduct;

      const productIndex = bagProducts.findIndex((p) => p.bagId === bagId);

      const newProduct = { ...bagProducts[productIndex] };
      newProduct.quantity = earlierAddedStock + stockForAdding;

      bagProducts[productIndex] = newProduct;
      dispatch(actions.setProducts(bagProducts));
      dispatch(actions.calculateSubtotal());
      dispatch(actions.setError('ADDED'));
    } else {
      dispatch(actions.setError('NOT AVAILABLE'));
    }
  }
};

export const deleteProduct = (bagId) => (dispatch, getState) => {
  const state = getState().bag;

  const bagProducts = [...state.products];

  const index = state.products.findIndex((product) => product.bagId === bagId);

  bagProducts.splice(index, 1);

  dispatch(actions.setProducts(bagProducts));
  dispatch(actions.calculateSubtotal());
};

export const { setTotal, setDeliveryPrice, setError, setSubtotal, resetBag } =
  bag.actions;

export default bag.reducer;
