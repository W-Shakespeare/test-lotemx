import { createStore } from "redux";
import { combineReducers } from "redux";
import favoriteCompanyReducer from "../reducers/favoriteCompanyReducer";
import сompaniesReducer from "../reducers/сompaniesReducer";

const rootReducer = combineReducers({
  favorites: favoriteCompanyReducer,
  сompanies: сompaniesReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
