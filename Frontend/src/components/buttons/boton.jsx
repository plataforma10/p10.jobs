// React
import React, { PureComponent } from 'react';
// Componentes
import { Button } from '@material-ui/core';
// Otros
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
// Estilos
import styles from './styles.jsx';

@withStyles(styles)
class Boton extends PureComponent {
    render() {
        const { classes, color, round, children, fullWidth, disabled,
            simple, size, block, link, justIcon, className, ...rest } = this.props;
        const btnClasses = classNames(classes.btn, {
            [classes[size]]: size,
            [classes[color]]: color,
            [classes.round]: round,
            [classes.fullWidth]: fullWidth,
            [classes.disabled]: disabled,
            [classes.simple]: simple,
            [classes.block]: block,
            [classes.link]: link,
            [classes.justIcon]: justIcon,
            [className]: className
        });
        return (
            <Button {...rest} className={btnClasses}>
                {children}
            </Button>
        );
    }
}

Boton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "facebook",
        "twitter",
        "google",
        "github",
        "transparent"
    ])
};

export default Boton;