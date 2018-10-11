import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: grey[700]
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
        'html *': {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
        },
        'body, h1, h2, h3, h4, h5, h6': {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: '300',
            lineHeight: '1.5em'
        },
        'h1, h2, h3, h4, h5, h6': {
            color: 'inherit'
        },
        'h1, h2, h3': {
            marginTop: '20px',
            marginBottom: '10px'
        },
        'h4, h5, h6': {
            marginTop: '10px',
            marginBottom: '10px'
        },
        h1: {
            fontSize: '3.3125rem',
            lineHeight: '1.15em'
        },
        h2: {
          fontSize: '2.25rem',
          lineHeight: '1.5em'
        },
        h3: {
            fontSize: '1.5625rem',
            lineHeight: '1.4em'
        },
        h4: {
          fontSize: '1.125rem',
          lineHeight: '1.5em'
        },
        h5: {
          fontSize: '1.0625rem',
          lineHeight: '1.55em'
        },
        h6: {
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          fontWeight: '500'
        },
        p: {
            fontSize: '14px',
            margin: '0 0 10px'
        },
        html: {
          fontFamily: 'sans-serif',
          lineHeight: '1.15',
          '-webkit-text-size-adjust': '100%',
          '-ms-text-size-adjust': '100%',
          '-ms-overflow-style': 'scrollbar',
          '-webkit-tap-highlight-color': 'transparent'
        },
        body: {
            backgroundColor: '#E5E5E5',
            color: '#3C4858',
            margin: '0',
            fontSize: '1rem',
            textAlign: 'left'
        },        
        legend: {
          borderBottom: '0'
        },
        '*': {
          '-webkit-tap-highlight-color': 'transparent',
          boxSizing: 'border-box',
          '&:focus': {
            outline: '0'
          }
        },        
        span: {
            verticalAlign: 'middle'
        },        
        a: {
          color: theme.palette.text.primary,
          textDecoration: 'none',
          backgroundColor: 'transparent',
          '&:hover, &:focus': {
              color: 'darken(theme.palette.text.primary, 50%)',
              textDecoration: 'none'
          }
        },        
        label: {
            fontSize: '14px',
            lineHeight: '1.42857',
            color: theme.palette.text.primary,
            fontWeight: '400'
        },
        small: {
            fontSize: '75%',
            color: '#777',
            fontWeight: '400'
        },
        img: {
            verticalAlign: 'middle',
            borderStyle: 'none'
        },
        form: {
          marginBottom: '1.125rem'
        }
    }
});

export { theme, styles };