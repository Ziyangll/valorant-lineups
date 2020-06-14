import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonModal from "../../ButtonModal";
const useStyles = makeStyles({
  main: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#222",
  },

  one: {
    position: "absolute",
    left: "1200px",
    top: "650px",
  },
  two: {
    position: "absolute",
    left: "1050px",
    top: "330px",
  },
  three: {
    position: "absolute",
    left: "150px",
    top: "450px",
  },
});

export default function CypherSplit() {
  const classes = useStyles();
  const icon = "Cypher_Spycam.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className={classes.main}>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1ZJa_1eKSH5HHytuZf_IFUuenIQk1Oo4p"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1wl8eqT53flm_wNC3M--K9hu2smYhiA-x"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1oeD3lWIXgW2jhfRFDgrfpUb7vFLPN0G"
        }
      />
    </div>
  );
}
