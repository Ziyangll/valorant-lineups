import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ascent from "../Maps/Ascent";
import Bind from "../Maps/Bind";
import Haven from "../Maps/Haven";
import Split from "../Maps/Split";
import SovaAscent from "./Sova/SovaAscent";
import SovaBind from "./Sova/SovaBind";
import SovaHaven from "./Sova/SovaHaven";
import SovaSplit from "./Sova/SovaSplit";
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
      {map === "ascent" && <SovaAscent />}

      {map === "bind" && <Bind />}
      {map === "bind" && <SovaBind />}

      {map === "haven" && <Haven />}
      {map === "haven" && <SovaHaven />}

      {map === "split" && <Split />}
      {map === "split" && <SovaSplit />}
    </div>
  );
}
