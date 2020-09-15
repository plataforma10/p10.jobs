import React from "react";
// nodejs library
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import styles from "./styles";

@withStyles(styles)
class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: "translate3d(0," + 0 + "px,0)"
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
    window.addEventListener("scroll", this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }
  resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  }
  render() {
    const { classes, filter, className, children,
      style, image, small } = this.props;

    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined
    });
    
    return (
      <div className={parallaxClasses} style={{ ...style, backgroundImage: "url(" + image + ")", ...this.state }} ref="parallax" >
        <div className={classes.sombra}></div>
        {children}
      </div>
    );
  }
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string
};

export default Parallax;
