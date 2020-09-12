import React, { Fragment } from "react";

import Search from "./Search";
import Weather from "./Weather";

const Main = () => {
  return (
    <Fragment>
      <Search />
      <Weather />
    </Fragment>
  );
};

export default Main;
