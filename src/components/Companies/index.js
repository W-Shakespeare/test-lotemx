import React from "react";
import { useDispatch } from "react-redux";
import {
  addFavoriteCompany,
  changeFavoriteStatus,
  deleteFavoriteCompany,
} from "../../redux/actions/actions";
import { FavoriteIcon } from "../Icons/FavoriteIcon";
import { Company } from "./Company/Company";

export const CompanyContainer = ({ isFavorite, ...props }) => {
  const dispatch = useDispatch();

  const onAddFavoriteCompany = () => {
    dispatch(changeFavoriteStatus(props.id));
    dispatch(addFavoriteCompany({ ...props, isFavorite: true }));
  };
  const onDeleteFavoriteCompany = () => {
    dispatch(changeFavoriteStatus(props.id));
    dispatch(deleteFavoriteCompany(props.id));
  };

  isFavorite = isFavorite ? (
    <FavoriteIcon fill="red" onClick={onDeleteFavoriteCompany} />
  ) : (
    <FavoriteIcon fill="black" onClick={onAddFavoriteCompany} />
  );

  return <Company isFavorite={isFavorite} {...props} />;
};
