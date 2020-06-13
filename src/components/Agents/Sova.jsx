import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ascent from "../Maps/Ascent";
import Bind from "../Maps/Bind";
import Haven from "../Maps/Haven";
import Split from "../Maps/Split";
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

export default function Sova({map}) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {map === "ascent" && <Ascent />}
      {map === "bind" && <Bind />}
      {map === "haven" && <Haven />}
      {map === "split" && <Split />}
    </div>
  );
}
