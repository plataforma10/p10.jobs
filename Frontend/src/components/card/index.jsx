import React, { PureComponent } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import CardHeader from "./cardHeader";
import CardFooter from "./cardFooter";
import CardBody from "./cardBody";
import styles from "./styles";

@withStyles(styles)
class Card extends PureComponent {
  render(){
    const { classes, className, children, plain,
      profile, chart, ...rest } = this.props;

    const cardClasses = classNames({
      [classes.card]: true,
      [classes.cardPlain]: plain,
      [classes.cardProfile]: profile,
      [classes.cardChart]: chart,
      [className]: className !== undefined
    });

    return (
      <div className={cardClasses} {...rest}>
        {children}
      </div>
    );
  }
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool
};

export { CardBody, CardFooter, CardHeader };
export default Card;