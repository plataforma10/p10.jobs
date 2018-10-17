import { container, main } from '../../coreStyles';

const layoutStyle = {
    container,
    main,
    brand: {
        color: "#FFFFFF",
        textAlign: "left"
    },
    title: {
        fontSize: "2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative"
    },
    subtitle: {
        margin: "10px 0",
        fontSize: "1rem"
    },
    icon: {
        fontSize: "32px"
    },
    "@media (min-width: 768px)": {
        title: {
            fontSize: "3rem"
        },
        subtitle: {
            fontSize: "1.5625rem"
        }
    },
    "@media (min-width: 1200px)": {
        title: {
            fontSize: "4.2rem"
        },
        subtitle: {
            fontSize: "1.5625rem"
        }
    }
}

export default layoutStyle;
