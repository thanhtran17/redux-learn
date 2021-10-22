import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const Reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
