import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, ThemeProvider } from "@material-ui/core";
import Home from "./components/Home";
import Cypher from "./components/Cypher";

export default function App() {
  return (
    <Router>
      <div>
        <ThemeProvider>
          <AppBar position='static'>
            <Toolbar>
              <Button component={Link} to='/' color='inherit'>
                Home
              </Button>
              <Button component={Link} to='/cypher' color='inherit'>
                Cypher
              </Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/cypher'>
            <Cypher />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
