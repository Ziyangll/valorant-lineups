import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";

import Home from "./components/Home";
import Cypher from "./components/Agents/Cypher";
import Sova from "./components/Agents/Sova";
import Viper from "./components/Agents/Viper";

const useStyles = makeStyles({
  main: {
    margin: "0",
    backgroundColor: "#222",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#1b262c",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#bbe1fa",
      main: "#0f4c75",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#3282b8",
    },
    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.main}>
        <ThemeProvider theme={theme}>
          <AppBar position='static'>
            <Toolbar>
              <Button component={Link} to='/' color='inherit'>
                Valorant Lineups
              </Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/cypher/haven'>
            <Cypher map='haven' />
          </Route>
          <Route path='/sova/haven'>
            <Sova map='haven' />
          </Route>
          <Route path='/viper/haven'>
            <Viper map='haven' />
          </Route>
          <Route path='/cypher/bind'>
            <Cypher map='bind' />
          </Route>
          <Route path='/sova/bind'>
            <Sova map='bind' />
          </Route>
          <Route path='/viper/bind'>
            <Viper map='bind' />
          </Route>
          <Route path='/cypher/split'>
            <Cypher map='split' />
          </Route>
          <Route path='/sova/split'>
            <Sova map='split' />
          </Route>
          <Route path='/viper/split'>
            <Viper map='split' />
          </Route>
          <Route path='/cypher/ascent'>
            <Cypher map='ascent' />
          </Route>
          <Route path='/sova/ascent'>
            <Sova map='ascent' />
          </Route>
          <Route path='/viper/ascent'>
            <Viper map='ascent' />
          </Route>
          <Route path='/cypher'>
            <Cypher map='all' />
          </Route>
          <Route path='/sova'>
            <Sova map='all' />
          </Route>
          <Route path='/viper'>
            <Viper map='all' />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
