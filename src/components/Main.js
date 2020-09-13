import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Search from "./Search";
import Weather from "./Weather";

const Main = () => {
  const temperature = useSelector((state) =>
    state.weatherData ? state.weatherData.main.temp - 273.15 : null
  );

  let backgroundClass = "App-normal";
  if (temperature > 30) {
    backgroundClass = "App-hot";
  } else if (temperature < 20) {
    backgroundClass = "App-snow";
  }
  return (
    <Fragment>
      <div className={"App" + " " + backgroundClass}>
        <Search />
        <Weather />
      </div>
    </Fragment>
  );
};

export default Main;
