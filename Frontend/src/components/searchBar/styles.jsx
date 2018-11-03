import { primaryColor, warningColor, dangerColor, successColor,
    infoColor, roseColor, grayColor } from '../coreStyles';

const styles = {    
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: "#D2D2D2 !important"
        },
        "&:after": {
            borderColor: grayColor
        }
    },
    primary: {
        "&:after": {
            borderColor: primaryColor
        }
    },
    warning: {
        "&:after": {
            borderColor: warningColor
        }
    },
    danger: {
        "&:after": {
            borderColor: dangerColor
        }
    },
    success: {
        "&:after": {
            borderColor: successColor
        }
    },
    info: {
        "&:after": {
            borderColor: infoColor
        }
    },
    rose: {
        "&:after": {
            borderColor: roseColor
        }
    }
};

export default styles;