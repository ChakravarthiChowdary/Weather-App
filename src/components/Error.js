import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  weatherNullDiv: {
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Error = ({ message }) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.weatherNullDiv}>
        <Typography variant="h6">{message}</Typography>
      </div>
    </Container>
  );
};

export default Error;
