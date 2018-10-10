import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes/routes.jsx";
import NoMatch from "./components/notMatch";
import './assets/styles/scss/main.scss';

ReactDOM.render 
(
    <Router>
      <Switch>
          {Routes.map((prop, key) => {
          return <Route 
            exact={prop.exact}
            path={prop.path} 
            key={key} 
            component={prop.component} />;
        })}
        <Route component={NoMatch} />
      </Switch>
    </Router>,
    document.getElementById("root")
);
