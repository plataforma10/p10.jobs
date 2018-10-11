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

class Main extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return <App />;
  }
}

const store = configureStore();

const generateClassName = createGenerateClassName();

hydrate(
	  <JssProvider generateClassName={generateClassName}>
	    <MuiThemeProvider theme={theme}>
	      <Provider store={store}>
		        <BrowserRouter>
		            <Main />
		        </BrowserRouter>
		    </Provider>
	    </MuiThemeProvider>
	  </JssProvider>,
  document.querySelector('#root')
);

document.querySelector('#root-server').remove()

if (module.hot) {
  module.hot.accept();
}
