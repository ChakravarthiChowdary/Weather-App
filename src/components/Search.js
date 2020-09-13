import React, { useState, useEffect } from "react";
import { Container, makeStyles, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { geolocated } from "react-geolocated";

import { getWeatherData } from "../store/actions/actions";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  searchOuterDiv: {
    width: "100%",
    height: "5rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  searchInputDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchInput: {
    color: "#fff",
    borderBottom: "2px solid #fff",
  },
  searchInputLabel: {
    color: "#fff",
  },
}));

const Search = ({ isGeolocationEnabled, coords }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const inputChangedHandler = (event, field) => {
    if (field === "city") {
      setCity(event.target.value);
    } else {
      setCountry(event.target.value);
    }
  };
  const getWeatherClickedHandler = () => {
    if (city !== "") dispatch(getWeatherData(city, country, false));
  };

  useEffect(() => {
    if (isGeolocationEnabled && coords) {
      dispatch(getWeatherData(coords.latitude, coords.longitude, true));
    }
  }, [coords, dispatch]);

  return (
    <Container style={{ paddingTop: "2rem" }}>
      <div className={classes.searchOuterDiv}>
        <div className={classes.searchInputDiv}>
          <CssTextField
            id="filled-city"
            label="City"
            variant="standard"
            InputLabelProps={{ className: classes.searchInputLabel }}
            inputProps={{ className: classes.searchInput }}
            style={{ width: "30%" }}
            value={city}
            onChange={(event) => inputChangedHandler(event, "city")}
          />
          <CssTextField
            id="filled-country"
            label="Country"
            variant="standard"
            InputLabelProps={{ className: classes.searchInputLabel }}
            inputProps={{ className: classes.searchInput }}
            style={{ width: "30%" }}
            value={country}
            onChange={(event) => inputChangedHandler(event, "country")}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginTop: "1.5rem" }}
            onClick={getWeatherClickedHandler}
          >
            Get Weather
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Search);
