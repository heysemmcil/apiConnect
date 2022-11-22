import React from "react";

import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  console.log(">>>>PARAMS",params);
  return (
    <div>
      <h1>Here Is Category Details Page!</h1>
    </div>
  );
};

export default Category;
