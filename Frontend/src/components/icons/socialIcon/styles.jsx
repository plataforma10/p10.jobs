const styles = {
    facebook: {
        color: "#3B5998"
    },
    google: {
        color: "#d34836"
    },
    twitter: {
        color: "#00aced"
    },
    linkedin: {
        color: "#007bb6"
    },
    instagram: {
        color: "#fff"
    },
    icon: {
        display: "inline-flex",
        alignSelf: "center",
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
        }
    }     
}

export default styles;
