import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ascent from "../Maps/Ascent";
import Bind from "../Maps/Bind";
import Haven from "../Maps/Haven";
import Split from "../Maps/Split";
import ViperAscent from "./Viper/ViperAscent";
import ViperSplit from "./Viper/ViperSplit";
import ViperHaven from "./Viper/ViperHaven";
import ViperBind from "./Viper/ViperBind";
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

export default function Viper({ map }) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {map === "ascent" && <Ascent />}
      {map === "ascent" && <ViperAscent />}
      {map === "bind" && <Bind />}
      {map === "bind" && <ViperBind />}
      {map === "haven" && <Haven />}
      {map === "haven" && <ViperHaven />}
      {map === "split" && <Split />}
      {map === "split" && <ViperSplit />}
    </div>
  );
}
