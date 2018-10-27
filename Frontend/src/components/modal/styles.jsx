const modalStyle = {
    container: {
      display: 'inline-block'
    },
    left: {
      float: 'left'
    },
    right: {
      float: 'right'
    },
    modal: {
      borderRadius: "6px",
      "@media (max-width: 767px), (width: 812px)": {
        display: 'block',
        margin: 0,
        borderRadius: "0px",
        maxHeight: "unset",
        maxWidth: "unset",
        height: "100vh",
        width: "100%"
      },
      "@media (min-width: 992px)": {
        minWidth: "350px"
      },
      "@media (min-width: 1200px)": {
        minWidth: "400px"
      }
    },
    modalHeader: {
      borderBottom: "none",
      padding: "24px",
      paddingBottom: "0",
      minHeight: "16.43px"
    },
    modalTitle: {
      margin: "0",
      lineHeight: "1.42857143"
    },
    modalCloseButton: {
      color: "#999999",
      marginTop: "-12px",
      WebkitAppearance: "none",
      padding: "0",
      cursor: "pointer",
      background: "0 0",
      border: "0",
      fontSize: "inherit",
      opacity: ".9",
      textShadow: "none",
      fontWeight: "700",
      lineHeight: "1",
      float: "right"
    },
    modalClose: {
      width: "16px",
      height: "16px"
    },
    modalBody: {
      padding: "24px",
      position: "relative",
      "@media (max-width: 767px), (width: 812px)": {
        overflowY: "unset"
      }      
    },
    modalFooter: {
      padding: "24px",
      paddingTop: "0",
      margin: 0,
      "@media (max-width: 575px)": {
        display: 'block'
      }
    },
    modalBoton:{
      margin: '0px',
      width: '50%',
      '&.right':{
        textAlign: 'right'
      },
      "@media (max-width: 575px)": {        
        width: '100%',
        "& button": {
          width: '100%'
        }
      }
    }
  };
  
  export default modalStyle;
  