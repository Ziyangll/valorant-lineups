import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  main: {
    position: "absolute",
    width: "100%",
    height: "calc(100% - 64px);",
    backgroundColor: "#222",
  },
  text: {
    color: "#fff",
  },
});

export default function Sova({map}) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h1 className={classes.text}>Sova</h1>
      <h1 className={classes.text}>{map}</h1>
    </div>
  );
}
