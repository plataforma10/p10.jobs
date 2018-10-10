// React
import React from 'react';
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./views/home";
import Area from "./views/area";
import Posicion from "./views/posicion";
import NotFound from "./views/notFound";
import NoMatch from "./notMatch";

// Styles
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from './styles';


class App extends React.PureComponent 
{
  render() {
    return(
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/area/:area" component={Area} />
          <Route exact={true} path="/area/:area/:posicion" component={Posicion} />
          <Route exact={true} path="/no-encontrado" component={NotFound} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);