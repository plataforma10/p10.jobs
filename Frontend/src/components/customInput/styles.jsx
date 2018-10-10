import { defaultFont, primaryColor, dangerColor, successColor } from '../coreStyles';

const InputStyle = {  
    input: {
        color: "#495057",
        "&,&::placeholder": {
            fontSize: "14px",
            fontFamily: '"Roboto; Helvetica; Arial; sans-serif"',
            fontWeight: "400",
            lineHeight: "1.42857",
            opacity: "1"
        },
        "&::placeholder": {
            color: "#AAAAAA"
        }
    },
    formControl: {
        margin: "0 0 17px 0",
        paddingTop: "27px",
        position: "relative",
        "& svg,& .fab,& .far,& .fal,& .fas": {
          color: "#495057"
        }
    },
    label: {
        ...defaultFont,
        color: "#AAAAAA !important",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: 1.42857,
        top: "10px",
        "& + $underline": {
          marginTop: "0px"
        }
    },
    labelError: {
        color: dangerColor + " !important"
    },
    labelSuccess: {
        color: successColor + " !important"
    },
    disabled: {
        "&:before": {
            borderColor: "transparent !important" 
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: "#D2D2D2 !important",
            borderWidth: "1px !important" 
        },
        "&:after": {
            borderColor: primaryColor
        }
    },      
    inputError: {
        "&:after": {
            borderColor: dangerColor
        }
    },
    inputSuccess: {
        "&:after": {
            borderColor: successColor
        }
    },
    white: {
        "&,&::placeholder": {
            color: "#FFFFFF",
            opacity: "1",
        },
        "&:hover:not($disabled):before,&:before": {
            borderColor: "#FFFFFF"
        },
        "&:after": {
            borderColor: "#FFFFFF"
        }
    },
    feedback: {
        position: "absolute",
        bottom: "3px",
        right: "0",
        zIndex: "2",
        display: "block",
        width: "1em",
        height: "1em",
        textAlign: "center",
        pointerEvents: "none"
    }
};

export default InputStyle;