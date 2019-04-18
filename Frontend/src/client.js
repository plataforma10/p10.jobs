import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import { theme } from './components/styles';
import Loadable from 'react-loadable';
import App from './components';


const generateClassName = createGenerateClassName();
Loadable.preloadReady().then(() => {
	hydrate(
			<JssProvider generateClassName={generateClassName}>
				<MuiThemeProvider theme={theme}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</MuiThemeProvider>
			</JssProvider>,
		document.querySelector('#root')
	);

});

if (module.hot) {
	module.hot.accept();
}
