import { ADD_FAVORITE_COMPANY, DELETE_FAVORITE_COMPANY } from "../type/type";

const initialState = {
  favorites: [],
};

function favoriteCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE_COMPANY:
      return {
        ...state,
        favorites: [...state.favorites, action.companyObj],
      };
    case DELETE_FAVORITE_COMPANY:
      return {
        ...state,
        favorites: state.favorites.filter((company) => company.id != action.id),
      };
    default:
      return state;
  }
}
export default favoriteCompanyReducer;
