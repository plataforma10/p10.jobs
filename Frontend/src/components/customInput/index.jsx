// React
import React, { Component } from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// Componentes
import { Input, FormControl, InputLabel } from '@material-ui/core';
// @material-ui/icons
import withStyles from "@material-ui/core/styles/withStyles";
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// Estilos
import InputStyle from './styles';

class CustomInput extends Component {
    constructor() {
        super();
    }
    
    render() {             
        const { classes, formProps, labelProps, inputProps, labelText,
            id, error, white, success, disabled } = this.props;
        
        const formControlClasses = classNames(classes.formControl);

        const inputClasses = classNames(classes.input, classes.underline,{
            [classes.inputError]: error,
            [classes.inputSuccess]: success && !error,
            [classes.white]: white
        });

        const labelClasses = classNames(classes.label, {
            [classes.labelError]: error,
            [classes.labelSuccess]: success && !error
        });

        return (
            <FormControl {...formProps} className={formControlClasses}>
                {labelText ? (
                    <InputLabel htmlFor={id} {...labelProps} className={labelClasses}>{labelText}</InputLabel>
                ) : null }
                <Input id={id} {...inputProps} className={inputClasses}/>
                {error ? (
                    <Clear className={classes.feedback + " " + classes.labelError} />
                ) : success ? (
                    <Check className={classes.feedback + " " + classes.labelSuccess} />
                ) : null}
            </FormControl>
        );
    }
}

CustomInput.propTypes = {
    formProps: PropTypes.object,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    labelText: PropTypes.node,
    id: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool,
    disabled: PropTypes.bool
  };

export default withStyles(InputStyle)(CustomInput);