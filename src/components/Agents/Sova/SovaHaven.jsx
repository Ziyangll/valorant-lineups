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
    left: "1250px",
    top: "500px",
  },
  two: {
    position: "absolute",
    left: "200px",
    top: "560px",
  },
  three: {
    position: "absolute",
    left: "710px",
    top: "500px",
  },
  four: {
    position: "absolute",
    left: "680px",
    top: "1050px",
  }
});

export default function SovaHaven() {
  const classes = useStyles();
  const icon = "Sova_Recon_Bolt.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div className={classes.main}>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1k2NvEiUXRgrhK9rJBo4SoTTcgHoX2Nic"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=11pSrDxWuRN7uo-lCvaAwgW4xXvqCyalM"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1AAuC9bk2RxPURBn5NlwrEWh8R9Ih_gY6"
        }
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1Eu-jhNk6lJvskjlS7E8x1HqVCAbAwRve"
        }
      />
    </div>
  );
}
