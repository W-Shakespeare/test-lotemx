import React from "react";
import { FavoriteIcon } from "../../Icons/FavoriteIcon";

export const Company = ({ isFavorite, icon, name }) => {
  return (
    <div className="company">
      <div className="favorite">{isFavorite}</div>
      <div className="company__img">{icon}</div>
      <div className="company__name">{name}</div>
    </div>
  );
};
