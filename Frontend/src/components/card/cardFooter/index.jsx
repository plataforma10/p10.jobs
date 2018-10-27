import React, { PureComponent } from "react";
// nodejs library
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// Styles
import styles from "./styles";

@withStyles(styles)
class CardFooter extends PureComponent {
  render() {
    const { classes, className, children, plain, profile,
      stats, chart, ...rest } = this.props;

    const cardFooterClasses = classNames({
      [classes.cardFooter]: true,
      [classes.cardFooterPlain]: plain,
      [classes.cardFooterProfile]: profile,
      [classes.cardFooterStats]: stats,
      [classes.cardFooterChart]: chart,
      [className]: className !== undefined
    });

    return (
      <div className={cardFooterClasses} {...rest}>
        {children}
      </div>
    );
  }
}

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool
};

export default CardFooter;
