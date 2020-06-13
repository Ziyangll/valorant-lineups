import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  main: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#222",
  },
  text: {
    color: "#fff",
  },
});

export default function Bind() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h1 className={classes.text}>Bind</h1>
      <img
        className={classes.main}
        alt='bind map'
        src={process.env.PUBLIC_URL + "/images/maps/bind.png"}></img>
    </div>
  );
}
