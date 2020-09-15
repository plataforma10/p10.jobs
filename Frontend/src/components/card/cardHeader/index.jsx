import React, { PureComponent } from "react";
// nodejs library
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// styles
import styles from "./styles";

@withStyles(styles)
class CardHeader extends PureComponent {
  render() {    
    const { classes, className, children, color, plain,
      stats, icon, ...rest } = this.props;

    const cardHeaderClasses = classNames({
      [classes.cardHeader]: true,
      [classes[color + "CardHeader"]]: color,
      [classes.cardHeaderPlain]: plain,
      [classes.cardHeaderStats]: stats,
      [classes.cardHeaderIcon]: icon,
      [className]: className !== undefined
    });

    return (
      <div className={cardHeaderClasses} {...rest}>
        {children}
      </div>
    );
  }
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool
};

export default CardHeader;
