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
    left: "1010px",
    top: "600px",
  },
  two: {
    position: "absolute",
    left: "750px",
    top: "660px",
  },
  three: {
    position: "absolute",
    left: "230px",
    top: "550px",
  },
});

export default function CypherBind() {
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
          "https://drive.google.com/uc?export=view&id=1orxyNIQWDyMLBeFrshTxLWdgCVtIzm4R"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1SP31w8Y_2UNLuY6yQmhpgPTJAJPkUDHi"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1aUzvpKjRWTcVSt9X5NHQd8Yf_qoQJ2IN"
        }
      />
    </div>
  );
}
