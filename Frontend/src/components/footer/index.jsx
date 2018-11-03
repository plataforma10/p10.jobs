/*eslint-disable*/
import React, { PureComponent } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import { Facebook, Linkeding, Twitter } from "../icons";
import styles from "./styles";
import { Link } from "react-router-dom";

@withStyles(styles)
class Footer extends PureComponent {
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
                <a href="https://www.plataforma10.com.ar/" target="_blank" className={classes.block}>
                  Plataforma 10
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <Link to="/" className={classes.block}>
                  Home
                </Link>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="https://www.plataforma10.com.ar/blog"  target="_blank" className={classes.block}>
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
                  <Facebook href={process.env.Facebook} target="_blank" rel="noopener noreferrer"/>
                  <Linkeding href={process.env.Twitter} target="_blank" rel="noopener noreferrer"/>
                  <Twitter href={process.env.Linkedin} target="_blank" rel="noopener noreferrer"/>
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
