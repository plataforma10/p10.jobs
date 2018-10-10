// React
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./views/home";
import Area from "./views/area";
import Posicion from "./views/posicion";
import NotFound from "./views/notFound";
import NoMatch from "./notMatch";

// Styles
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';


class App extends React.PureComponent 
{
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/area/:area" component={Area} />
          <Route exact={true} path="/area/:area/:posicion" component={Posicion} />
          <Route exact={true} path="/no-encontrado" component={NotFound} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);