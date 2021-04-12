import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";

export const Search = ({ searchValue, onChangeInputSearch }) => {
  return (
    <div className="search">
      <SearchIcon />
      <input
        placeholder="Search..."
        value={searchValue}
        onChange={onChangeInputSearch}
      />
    </div>
  );
};
