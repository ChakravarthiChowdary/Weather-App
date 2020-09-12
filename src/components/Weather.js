import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudMeatball,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faPooStorm,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Error from "./Error";

const useStyles = makeStyles((theme) => ({
  weatherOuterDiv: {
    height: "80vh",
    width: "100%",

    marginLeft: "auto",
    marginRight: "auto",
  },
  weatherInnerDiv: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherTitle: {
    color: "white",
  },
  weatherMinMax: {
    display: "flex",
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const Weather = () => {
  const classes = useStyles();
  const weatherData = useSelector((state) => state.weatherData);
  const error = useSelector((state) => state.error);

  if (error) {
    return <Error message="Something went wrong! Please search again!" />;
  }

  if (!weatherData) {
    return <Error message="Please search weather for a city!" />;
  }
  const id = weatherData.weather[0].id;
  let icon = faCloud;
  if (id <= 531 && id >= 500) {
    icon = faCloudRain;
  } else if (id <= 232 && id >= 200) {
    icon = faPooStorm;
  } else if (id <= 321 && id >= 300) {
    icon = faCloudSunRain;
  } else if (id <= 622 && id >= 600) {
    icon = faSnowflake;
  } else if (id === 800) {
    icon = faCloudSun;
  } else if (id <= 804 && id >= 801) {
    icon = faCloudMeatball;
  }
  return (
    <Container>
      <div className={classes.weatherOuterDiv}>
        <div className={classes.weatherInnerDiv}>
          <div className={classes.weatherTitle}>
            <Typography variant="h2">
              {weatherData.name},{weatherData.sys.country}
            </Typography>
          </div>
          <div className={classes.weatherIcon}>
            <FontAwesomeIcon icon={icon} size="6x" />
          </div>
          <div>
            <Typography variant="h3">
              {Math.round(weatherData.main.temp - 273.15)}°C
            </Typography>
          </div>
          <div className={classes.weatherMinMax}>
            <Typography variant="h4">
              Min :{Math.round(weatherData.main.temp_min - 273.15)}°C
            </Typography>
            <Typography variant="h4">
              Max :{Math.round(weatherData.main.temp_max - 273.15)}°C
            </Typography>
          </div>
          <div>
            <Typography variant="h5">
              {weatherData.weather[0].description.toUpperCase()}
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Weather;
