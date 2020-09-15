import { container, main } from '../../coreStyles';

const posicionStyle = {
    container,
    main,
    buttonRight: {
        textAlign: "right"
    },
    "@media (max-width: 767.98px)": {
        botones: {
            "& a button, div button":{
                width: "100%"
            },
            "& div":{
                width: "100%"
            }
        },
        title: {
            fontSize: "2.3125rem",
        }
    }
}

export default posicionStyle;