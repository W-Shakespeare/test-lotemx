import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Search } from "../Search/Search";
import { API } from "../../api";
import { Companies } from "../Companies/Companies";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const searchMethod = (сompanies, searchValue) => {
    let reg = new RegExp(searchValue, "i");
    let result = сompanies.reduce((acc, next) => {
      for (let key in next) {
        if (reg.test(next[key])) {
          acc.push(next);
          return acc;
        }
      }
      return acc;
    }, []);
    console.log("result", result);
    return result;
  };
  const searchedResult = useSelector((state) =>
    searchMethod(state.сompanies.сompanies, searchValue)
  );
  console.log("RESAPP", searchedResult);
  const onChangeInputSearch = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    //I don't have time to set up a request
    // API.sendSearchText(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <Search
        searchValue={searchValue}
        onChangeInputSearch={onChangeInputSearch}
      />
      <Companies сompanies={searchedResult} />
    </div>
  );
}

export default App;
