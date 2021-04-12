import {
  ADD_FAVORITE_COMPANY,
  DELETE_FAVORITE_COMPANY,
  CHANGE_FAVORITE_STATUS,
  SEARCHED_RESULT,
} from "../type/type";

export const changeFavoriteStatus = (id) => ({
  type: CHANGE_FAVORITE_STATUS,
  id,
});

export const addFavoriteCompany = (companyObj) => ({
  type: ADD_FAVORITE_COMPANY,
  companyObj,
});

export const deleteFavoriteCompany = (id) => ({
  type: DELETE_FAVORITE_COMPANY,
  id,
});

export const searchedResult = (searchedResult) => ({
  type: SEARCHED_RESULT,
  searchedResult,
});
