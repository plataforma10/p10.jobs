const styles = {
    text: {
        color: "#444",
        marginLeft: "5px",
        fontSize: "0.5em",
        "&:hover, &:active": {
            color: "#000"
        }
    },
    icon: {
        display: "inline-flex",
        alignSelf: "center",
        alignItems: "center",
        float: "left",
        "& svg":{
            height: "1em",
            width: "1em",
            fill: "currentColor"
        },
        "& img":{
            height: "1em",
            width: "1em",
            fill: "currentColor",
            top: ".125em",
            position: "relative"
        },
        "&baseline": {
            top: ".125em",
            position: "relative"
        },        
        "&:hover, &:active": {
            "& span": {
                textDecoration: "underline"
            }
        }
    },
    defaultIcon:{
        fontSize: 24,
        color: "#444"
    }     
}

export default styles;
