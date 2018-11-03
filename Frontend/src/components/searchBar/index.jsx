import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Materials UI
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search'
// Components
import Card, { CardBody } from "../card";
// Styles
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';

@withStyles(styles)
class SearchBar extends Component {
    render() {
        const { classes, color, ...rest } = this.props;
        
        var inputClasses = classNames(classes.underline, {
                [classes[color]]: color
            });

        return (
            <Card>
                <CardBody>
                    <Input className={inputClasses} placeholder="Buscar" fullWidth endAdornment={
                        <InputAdornment>
                            <Search />
                        </InputAdornment>
                    } { ...rest }/>
                </CardBody>
            </Card>
        )
    }
}

SearchBar.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ])
};

export default SearchBar;