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
    left: "950px",
    top: "360px",
  },
  two: {
    position: "absolute",
    left: "200px",
    top: "450px",
  },
  three: {
    position: "absolute",
    left: "460px",
    top: "550px",
  },
  four: {
    position: "absolute",
    left: "1220px",
    top: "820px",
  },
  five: {
    position: "absolute",
    left: "370px",
    top: "1000px",
  },
  six: {
    position: "absolute",
    left: "570px",
    top: "910px",
  },
});

export default function SovaSplit() {
  const classes = useStyles();
  const icon = "Sova_Recon_Bolt.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  return (
    <div className={classes.main}>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=11Xl5yjp_q717Ei6oHCDqWdXE0oLQkaN7"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1o7t4_AzIH1I7iEQFh6eLulJyKj70T03x"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1hPYe3uOPjzYHgAjzkIzNAwJhxq6VfY3u"
        }
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=140pUOCcx_ziybYMubJmWdTCGe5DOon8O"
        }
      />
      <ButtonModal
        open={open5}
        setOpen={setOpen5}
        style={classes.five}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1kJuOJ32-9J1NLDyk8lRFEV_RuBvzpmd-"
        }
      />
      <ButtonModal
        open={open6}
        setOpen={setOpen6}
        style={classes.six}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1R6fg6kzdjmwJrY8JuRpo3eIWNvbua_X2"
        }
      />
    </div>
  );
}
