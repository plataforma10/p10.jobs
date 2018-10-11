// React
import React, { PureComponent } from 'react';
// Componentes
import { Grid } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
// Estilos
import styles from '../styles';

class GridItem extends PureComponent {
    render() {
        const { classes, children, className, ...rest } = this.props;
        return (
            <Grid item {...rest} className={classes.gridItem + " " + className}>
                {children}
            </Grid>
        );
    }
};

export default withStyles(styles)(GridItem);