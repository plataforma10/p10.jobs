/*eslint-disable*/
import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import SocialIcon from "../icons/socialIcon";
import styles from "./styles";

@withStyles(styles)
class Footer extends Component {
  constructor(){
    super();
  }

  render(){
    const { classes, whiteFont } = this.props;

    const footerClasses = classNames(classes.footer, {
      [classes.footerWhiteFont]: whiteFont
    });

    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.botonesNavegacion}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a href="https://www.plataforma10.com.ar/" target="_blanck" className={classes.block}>
                  Plataforma 10
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="/" className={classes.block}>
                  Home
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="https://www.plataforma10.com.ar/blog"  target="_blanck" className={classes.block}>
                  Blog
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.redesSociales}>
          <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <span className={classes.block}> Copyright &copy; {1900 + new Date().getYear()} Plataforma 10 </span>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <span className={classes.icon}>
                  <SocialIcon icon="facebook" href="http://www.google.com.ar" tarjetBlanck/>
                  <SocialIcon icon="twitter" />
                  <SocialIcon icon="linkedin" />
                </span>
              </ListItem>
            </List>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};

export default Footer;
