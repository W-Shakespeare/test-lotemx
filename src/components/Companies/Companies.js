import React from "react";
import { CompanyContainer } from ".";

export const Companies = ({ сompanies }) => {
  return (
    <div className="сompanies">
      {сompanies.map((company) => {
        return <CompanyContainer {...company} />;
      })}
    </div>
  );
};
