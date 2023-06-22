import axios from "../../utils/helper/axios";
import { CATEGORIES_ACTION_TYPE } from "./categories.type";

import { Dispatch } from "redux";

// export const getAllCategory = () => {
//   return async (dispatch) => {
//     dispatch({ type: CATEGORIES_ACTION_TYPE.GET_ALL_CATEGORIES_REQUEST });
//     try {
//       const res = await axios.get("/category/getcategory");

//       if (res.status === 200) {
//         const { categoryList } = res.data;
//         console.log("categoryList From api: ", categoryList);
//         dispatch({
//           type: CATEGORIES_ACTION_TYPE.GET_ALL_CATEGORIES_SUCCESS,
//           payload: categoryList,
//         });
//       } else {
//         dispatch({
//           type: CATEGORIES_ACTION_TYPE.GET_ALL_CATEGORIES_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     } catch (error) {
//       dispatch({
//         type: CATEGORIES_ACTION_TYPE.GET_ALL_CATEGORIES_FAILURE,
//         payload: { error: error.message },
//       });
//     }
//   };
// };
