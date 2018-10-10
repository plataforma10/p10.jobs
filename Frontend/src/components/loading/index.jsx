import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import GridContainer from '../grid/gridContainer';
import Style from './styles';
import withStyles from "@material-ui/core/styles/withStyles";

class Loading extends Component {
    render() {
        const { Nombre, classes } = this.props;
        return(
        <GridContainer alignItems="center" direction="column">
            <ReactLoading type={"cylon"} color={"3C4858"} height={'70px'} width={'70px'} />
            <div><span className={classes.texto}>Cargando {Nombre}</span></div>
        </GridContainer>)
    }
}

export default withStyles(Style)(Loading);