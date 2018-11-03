import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
// Componentes
import GridContainer from "../../../grid/gridItem";
import CustomTable, { TableItemPosicion } from "../../../table";
import SnackbarContent from '../../../snackbar';
import Loading from '../../../loading';
import SearchBar from '../../../searchBar';

class TablaPosiciones extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            posiciones: [],
            query: ""
        };
    }

    componentDidMount() {
        var area = this.props.area;
        axios.get(`${process.env.HOST_BACK}/area/${area}/posiciones`)
            .then((res) => res.data)
            .then((posiciones) => this.onSetResult(posiciones))
            .catch(() => this.onSetError()); 
    }
    
    onSetResult = (posiciones) => {
        if(posiciones.length) {
            var area = this.props.area;

            this.setState({ 
                posiciones: posiciones.map(function (pos) {
                    return {
                        Titulo: `${pos.Titulo}`,
                        Localidad: `${pos.Localidad}`,
                        FechaCreacion: `${moment(pos.FechaCreacion).locale("es").format("DD-MMMM-YYYY")}`,
                        Path: `/area/${area}/${pos.Path}`
                    }
                })
            });
        }
        else {
            this.onSetError();
        }
    }

    onSetError = () => {
        this.setState({ error: true });
    }

    filter = () => {
        var filterResult = this.state.posiciones
            .filter(posicion => posicion.Titulo.includes(this.state.query));


        return(
            filterResult.length > 0 ?                
                filterResult.map((prop, key) => {
                    return (
                        <TableItemPosicion key={key} posicion={prop} color="info" />
                    )
                }) :
            <span>No se encontraron resultados</span>
        )
    }

    render() {        
        if(this.state.posiciones.length === 0){
            return (
                <Loading />
            );
        }
        
        return (
            <GridContainer>
                <SearchBar color="info" onChange={(e) => this.setState({ query: e.target.value })}/>
                { this.state.error ? 
                    (<SnackbarContent message={
                        <span>A ocurrido un error al intentar cargar los puestos disponibles.</span>
                    } color="danger" />) : 
                    (<CustomTable color="info" tableHead={["Puesto", "Localidad", "Fecha", ""]}>
                        { this.filter() }                                
                    </CustomTable>) 
                }
            </GridContainer>
        );
    }
}

export default TablaPosiciones;
