const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT":
      const filteredData = state.products.filter(
        (val) => val.id === payload.id
      );

      if (filteredData.length !== 0) {
        return {
          ...state,
          products: [...state.products],
        };
      } else {
        return {
          ...state,
          products: [...state.products, payload],
        };
      }
    //   return {
    //     ...state,
    //     products: [...state.products, payload],
    //   };
    case "DELETE_PRODUCT":
      const newData = state.products.filter((val) => val.id !== payload.id);
      return {
        ...state,
        products: newData,
      };
    default:
      return state;
  }
};
export default productReducer;
