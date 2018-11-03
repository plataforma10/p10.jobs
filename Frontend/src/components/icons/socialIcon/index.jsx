// React
import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

@withStyles(styles)
class CustomIcon extends PureComponent {
    render() {
        const { classes, href, text, className, children, ...rest } = this.props;
        
        return (
            <a href={href} className={`${classes.defaultIcon} ${className}`} {...rest} >
                <div className={classes.icon}>
                    { children }
                    { text ? (<span className={classes.text}>{ text }</span>) : null }             
                </div>
            </a>
        )
    }
}

CustomIcon.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string
};

export default CustomIcon;
