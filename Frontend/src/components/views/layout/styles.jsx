import { container, main } from '../../coreStyles';

const layoutStyle = {
    container,
    main,
    brand: {
        color: "#FFFFFF",
        textAlign: "left"
    },
    title: {
        fontWeight: "600",
        display: "inline-block",
        position: "relative"
    },
    subtitle: {
        maxWidth: "500px",
        margin: "10px 0 0"
    },
    icon: {
        fontSize: "32px"
    },
    "@media (min-width: 768px)": {
        title: {
            fontSize: "4rem"
        }
    },
    "@media (min-width: 1200px)": {
        title: {
            fontSize: "4.2rem"
        }
    }
}

export default layoutStyle;
