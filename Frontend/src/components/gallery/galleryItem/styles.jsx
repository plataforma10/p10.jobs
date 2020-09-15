const styles = {
    imagen: {
        width: '100%',
        minHeight: 220
    },
    contenedor: {
        width: '100%',
        '& li': {
            margin: '3px'
        },
        "@media (min-width: 576px)": {
            width: '50%'
        },
        "@media (min-width: 768px)": {
            width: '50%'
        },
        "@media (min-width: 992px)": {
            width: '25%'
        },
        "@media (min-width: 1200px)": {
            width: '25%'
        }
    }
}

export default styles;