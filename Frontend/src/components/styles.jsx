import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: grey[50],
      secondary: grey[900],
    },
    primary: { main: grey[50] },
    secondary: {
      main: lightBlue[600], 
      contrastText: grey[50] 
    }
  },
  typography: {
    fontFamily: [
        "Roboto", "Helvetica", "Arial", "sans-serif"
    ]
  }
});

const styles = (theme) => ({
    '@global': {
        '*': {
            '-webkit-tap-highlight-color': "rgba(255, 255, 255, 0)",
            '-webkit-tap-highlight-color': "transparent",
            boxSizing: "border-box",
            '-webkit-tap-highlight-color': "transparent"
        },
        html: {
            fontFamily: "sans-serif",
            lineHeight: "1.15",
            '-webkit-text-size-adjust': "100%",
            '-ms-text-size-adjust': "100%",
            '-ms-overflow-style': "scrollbar",
            '-webkit-tap-highlight-color': "transparent"
        },
        'html *': {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
        },
        body: {
            backgroundColor: "#E5E5E5",
            color: "#3C4858",
            margin: "0",
            fontSize: "1rem",
            textAlign: "left"
        },
        'body, h1, h2, h3, h4, h5, h6': {
            fontFamily: theme.typography.fontFamily,
            fontWeight: "300",
            lineHeight: "1.5em"
        },
        img: {
            verticalAlign: "middle",
            borderStyle: "none"
        }
    }
});

export { theme, styles };