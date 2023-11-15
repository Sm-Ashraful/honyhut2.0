import axios from "../../utils/helper/axios";
import { PRODUCT_ACTION_TYPE } from "../product/product.type";
import { CATEGORY_ACTION_TYPE } from "../category/category.type";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.post(`/initialData`);

    if (res.status === 200) {
      const { categories, products } = res.data;
      dispatch({
        type: PRODUCT_ACTION_TYPE.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products },
      });
      dispatch({
        type: CATEGORY_ACTION_TYPE.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
      //   dispatch({
      //     type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
      //     payload: { orders },
      //   });
    }
  };
};
