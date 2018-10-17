import {  warningColor,  primaryColor,  dangerColor,  successColor,
  infoColor,  roseColor,  grayColor,  defaultFont } from "../coreStyles";

const tableStyle = theme => ({
  warning: {
    color: warningColor
  },
  primary: {
    color: primaryColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  table: {
    marginBottom: "0",
    width: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    fontSize: "1.3em"
  },
  tableCell: {
    ...defaultFont,
    padding: "12px 8px",
    verticalAlign: "middle",
    lineHeight: '25px'
  },
  visiblemd: {
    display: 'none'
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  "@media (max-width: 767.98px)": {    
    visiblexs: {
      display: 'block'
    }
  },
  "@media (min-width: 768px)": {
    visiblexs: {
      display: 'none'
    },
    visiblemd: {
      display: 'table-cell'
    }
  }
});

export default tableStyle;
