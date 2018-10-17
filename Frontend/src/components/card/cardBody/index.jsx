import React, { PureComponent } from "react";
// nodejs library
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// styles
import styles from "./styles";

@withStyles(styles)
class CardBody extends PureComponent {
  render(){
    const { classes, className, children, plain, profile, ...rest } = this.props;
    const cardBodyClasses = classNames({
      [classes.cardBody]: true,
      [classes.cardBodyPlain]: plain,
      [classes.cardBodyProfile]: profile,
      [className]: className !== undefined
    });
    return (
      <div className={cardBodyClasses} {...rest}>
        {children}
      </div>
    );
  }
}

CardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool
};

export default CardBody;
