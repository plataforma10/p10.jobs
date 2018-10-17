// React
import React, { Component } from 'react';
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


class App extends Component
{  
  componentDidMount() {    
    const rootServer = document.getElementById('root-server');
    if (rootServer && rootServer.parentNode) {
      rootServer.parentNode.removeChild(rootServer);
    }
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/area/:area" component={Area} />
        <Route exact path="/area/:area/:posicion" component={Posicion} />
        <Route exact path="/no-encontrado" component={NotFound} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default withStyles(styles)(App);