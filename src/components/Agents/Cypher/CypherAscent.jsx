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
    top: "530px",
  },
  two: {
    position: "absolute",
    left: "1050px",
    top: "430px",
  },
  three: {
    position: "absolute",
    left: "350px",
    top: "550px",
  },
});

export default function CypherAscent() {
  const classes = useStyles();
  const icon = "Cypher_Spycam.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1y8SIW9fMPE1BxICTKe2I7SPz8jDadrtj"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1xnnmDbul6Z3AavppfFa7nAXk_uKk22D1"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1iq0XSRB-MhCPNbfFRkhcfoovBDsklsxd"
        }
      />
    </div>
  );
}
