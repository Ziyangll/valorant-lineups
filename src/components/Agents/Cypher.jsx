import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ascent from "../Maps/Ascent";
import Bind from "../Maps/Bind";
import Haven from "../Maps/Haven";
import Split from "../Maps/Split";

import CypherAscent from "./Cypher/CypherAscent";
import CypherBind from "./Cypher/CypherBind";
import CypherHaven from "./Cypher/CypherHaven";
import CypherSplit from "./Cypher/CypherSplit";
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

export default function Cypher({ map }) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {map === "ascent" && <Ascent />}
      {map === "ascent" && <CypherAscent />}

      {map === "bind" && <Bind />}
      {map === "bind" && <CypherBind />}

      {map === "haven" && <Haven />}
      {map === "haven" && <CypherHaven />}

      {map === "split" && <Split />}
      {map === "split" && <CypherSplit />}
    </div>
  );
}
