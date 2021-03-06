// React
import React, { Component } from 'react';
// Componentes
import { Grid } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
// Otros
import PropTypes from 'prop-types';
// Estilos
import GridStyle from '../../assets/styles/components/gridStyle.jsx';

class GridContainer extends Component {
    constructor(){
        super();
    }

    render() {
        const { classes, children, className, ...rest } = this.props;
        return (
            <Grid container {...rest} className={classes.grid + " " + className}>
                {children}
            </Grid>
        );
    }
};

GridContainer.defaultProps = {
    className: ""
};
  
GridContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default withStyles (GridStyle)(GridContainer);