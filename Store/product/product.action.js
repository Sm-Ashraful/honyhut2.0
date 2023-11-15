import axios from "../../utils/helper/axios";
import { PRODUCT_ACTION_TYPE } from "./product.type";

// new action
const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_ACTION_TYPE.GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.post(`/product/get-products`);
      console.log("Response: ", res.data);
      if (res.status === 201) {
        const { products } = res.data;
        dispatch({
          type: PRODUCT_ACTION_TYPE.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({ type: PRODUCT_ACTION_TYPE.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// modified actrion
export const addProduct = (form) => {
  console.log("Product Picture: ", form);
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_ACTION_TYPE.ADD_PRODUCT_REQUEST });
      const res = await axios.post(`/product/create`, form);
      console.log("This is product Response: ", res);
      if (res.status === 201) {
        dispatch({ type: PRODUCT_ACTION_TYPE.ADD_PRODUCT_SUCCESS });
        // dispatch(getProducts());
      } else {
        dispatch({ type: PRODUCT_ACTION_TYPE.ADD_PRODUCT_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// new action
export const deleteProductById = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`product/deleteProductById`, {
        data: { payload },
      });
      dispatch({ type: PRODUCT_ACTION_TYPE.DELETE_PRODUCT_BY_ID_REQUEST });
      if (res.status === 202) {
        dispatch({ type: PRODUCT_ACTION_TYPE.DELETE_PRODUCT_BY_ID_SUCCESS });
        dispatch(getProducts());
      } else {
        const { error } = res.data;
        dispatch({
          type: PRODUCT_ACTION_TYPE.DELETE_PRODUCT_BY_ID_FAILURE,
          payload: {
            error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
