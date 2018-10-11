import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import configureStore from './store';
import { theme } from './components/styles';
import Loadable from 'react-loadable';

const App = Loadable({
  loader: () => import('./components'),
  loading: () => null
});

const store = configureStore();

const generateClassName = createGenerateClassName();

hydrate(
	  <JssProvider generateClassName={generateClassName}>
	    <MuiThemeProvider theme={theme}>
	      <Provider store={store}>
		        <BrowserRouter>
              <App />
		        </BrowserRouter>
		    </Provider>
	    </MuiThemeProvider>
	  </JssProvider>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept();
}
