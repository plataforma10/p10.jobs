import { container, primaryColor } from "../coreStyles";

const footerStyle = {
  block: {
    color: "inherit",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  botonesNavegacion: {
    display: "block"
  },
  redesSociales: {
    display: "block"
  },
  "@media (min-width: 992px)": {
    redesSociales: {
      float: "right"
    },
    botonesNavegacion: {
      float: "left"
    }
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    verticalAlign: "middle",
    display: "inline-block",
    paddingLeft: "7px",
    paddingRight: "7px",
    width: "auto"
  },
  icon: {
    fontSize: "24px"
  }
};

export default footerStyle;
