import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import BotonLink from "../buttons/botonLink";
import styles from "./styles";

@withStyles(styles)
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mobileOpen: false,
      };
      this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
      this.headerColorChange = this.headerColorChange.bind(this);
    }
    handleDrawerToggle() {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    }
    headerColorChange() {
        const { classes, color, changeColorOnScroll } = this.props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
          document.body
            .getElementsByTagName("header")[0]
            .classList.remove(classes[color]);
          document.body
            .getElementsByTagName("header")[0]
            .classList.add(classes[changeColorOnScroll.color]);
        } else {
          document.body
            .getElementsByTagName("header")[0]
            .classList.add(classes[color]);
          document.body
            .getElementsByTagName("header")[0]
            .classList.remove(classes[changeColorOnScroll.color]);
        }
      }
    
    componentDidMount() {
      if (this.props.changeColorOnScroll) {
        window.addEventListener("scroll", this.headerColorChange);
      }
    }
    componentWillUnmount() {
      if (this.props.changeColorOnScroll) {
        window.removeEventListener("scroll", this.headerColorChange);
      }
    }
    
    render() {
        const { classes, srcLogo, color, rightLinks,
            brand, fixed, absolute, upAll } = this.props;

          const appBarClasses = classNames({
            [classes.appBar]: true,
            [classes[color]]: color,
            [classes.absolute]: absolute,
            [classes.fixed]: fixed,
            [classes.upAll]: upAll
          });

          return (
            <AppBar className={appBarClasses}>
              <Toolbar className={classes.container}>
                <div className={classes.flex}>
                  {srcLogo ? (<img alt="plataforma10" src={srcLogo} className={classes.logo}/>) : (null)}                  
                  <BotonLink path="/" color="transparent" className={classes.title}>         
                    {brand}
                  </BotonLink>
                </div>
                <Hidden smDown implementation="css">
                  {rightLinks}
                </Hidden>
                <Hidden mdUp>
                  <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle}>
                    <Menu />
                  </IconButton>
                </Hidden>
              </Toolbar>
              <Hidden mdUp implementation="css">
                <Drawer variant="temporary" anchor={"right"} open={this.state.mobileOpen}
                  classes={{ paper: classes.drawerPaper }} onClose={this.handleDrawerToggle}>
                  <div className={classes.appResponsive}>
                    {rightLinks}
                  </div>
                </Drawer>
              </Hidden>
            </AppBar>
        )
    };
}

Header.defaultProp = {
    color: "white"
};

Header.propTypes = {
    color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
    ]),
    rightLinks: PropTypes.node,
    leftLinks: PropTypes.node,
    brand: PropTypes.string,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool,
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark",
            "naranja"
        ]).isRequired
    })
};

export default Header;