import {
  UnderArmourIcon,
  RukkaIcon,
  ReebokIcon,
  PumaIcon,
  ObeyIcon,
  FilaIcon,
  AdidasIcon,
  NikeIcon,
  AsicsIcon,
  EspnIcon,
} from "../../components/Icons";
import { CHANGE_FAVORITE_STATUS, SEARCHED_RESULT } from "../type/type";

const initialState = {
  isMobileVersion: false,
  сompanies: [
    {
      id: 1,
      name: "adidas",
      icon: <AdidasIcon />,
      isFavorite: false,
    },
    {
      id: 2,
      name: "nike",
      icon: <NikeIcon />,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Asics",
      icon: <AsicsIcon />,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Espn",
      icon: <EspnIcon />,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Fila",
      icon: <FilaIcon />,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Obey",
      icon: <ObeyIcon />,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Puma",
      icon: <PumaIcon />,
      isFavorite: false,
    },
    {
      id: 8,
      name: "Reebok",
      icon: <ReebokIcon />,
      isFavorite: false,
    },
    {
      id: 9,
      name: "Rukka",
      icon: <RukkaIcon />,
      isFavorite: false,
    },
    {
      id: 10,
      name: "UnderArmour",
      icon: <UnderArmourIcon />,
      isFavorite: false,
    },
  ],
};

function сompaniesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FAVORITE_STATUS:
      debugger;
      return {
        ...state,
        сompanies: [
          ...state.сompanies.map((it) => {
            if (it.id == action.id) {
              return { ...it, isFavorite: !it.isFavorite };
            }
            return it;
          }),
        ],
      };
    case SEARCHED_RESULT:
      return {
        ...state,
        сompanies: action.searchedResult,
      };
    default:
      return state;
  }
}
export default сompaniesReducer;
