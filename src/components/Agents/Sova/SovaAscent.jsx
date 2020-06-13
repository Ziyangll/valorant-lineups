import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonModal from "../../ButtonModal";
const useStyles = makeStyles({
  main: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#222",
  },
  text: {
    color: "#fff",
  },
  icon: {
    width: "40px",
    height: "40px",
  },

  image: {
    position: "absolute",
    width: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    top: "50%",
    textAlign: "center",
  },
  one: {
    position: "absolute",
    left: "450px",
    top: "340px",
  },
  two: {
    position: "absolute",
    left: "680px",
    top: "420px",
  },
  three: {
    position: "absolute",
    left: "960px",
    top: "900px",
  },
  four: {
    position: "absolute",
    left: "360px",
    top: "730px",
  },
});

export default function SovaAscent() {
  const classes = useStyles();
  const icon = "Sova_Recon_Bolt.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={icon}
        imgID={"https://drive.google.com/uc?export=view&id=1hn6TkEY6glM0L6Wq0UoOkV98HckibtHE"}
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={"https://drive.google.com/uc?export=view&id=124WP0zfann-C1DJ6il9Z0yZqwnzhWAZW"}
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={"https://drive.google.com/uc?export=view&id=1hg3bGfd5IRxXmIVORM03MEjflI1agWeR"}
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={icon}
        imgID={"https://drive.google.com/uc?export=view&id=1MjfcSmdOkmS2tf3m8vmuw4DUdOllBh9F"}
      />
    </div>
  );
}
