/*eslint-disable*/
import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import footerStyle from "../../assets/styles/components/footerStyle.jsx";

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
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="/"
                  className={classes.block}
                >
                  About us
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="/"
                  className={classes.block}
                >
                  Blog
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} />
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
