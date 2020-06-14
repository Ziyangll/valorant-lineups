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
    left: "870px",
    top: "500px",
  },
  two: {
    position: "absolute",
    left: "280px",
    top: "440px",
  },
  three: {
    position: "absolute",
    left: "360px",
    top: "900px",
  },
  four: {
    position: "absolute",
    left: "490px",
    top: "780px",
  },
  five: {
    position: "absolute",
    left: "760px",
    top: "750px",
  },
});

export default function SovaBind() {
  const classes = useStyles();
  const icon = "Sova_Recon_Bolt.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <div className={classes.main}>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1wvM5N9HqcMbTMNC1IQ-H_efYyDPn3s5v"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1wQ0pzf5N-y_xIOQpik-YzrdZv6zz97SS"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1t1745VseOzQHPNTX2ZzNXruv8Y_ZU3t1"
        }
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=13BPeP-TwPodAf02v_Sgc4ZICb5R2bNED"
        }
      />
      <ButtonModal
        open={open5}
        setOpen={setOpen5}
        style={classes.five}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1Qgz6p-LhcPJ5cKa1ykCjtwrpWaiLiz7l"
        }
      />
    </div>
  );
}
