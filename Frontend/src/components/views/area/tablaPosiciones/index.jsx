import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
// Componentes
import GridContainer from "../../../grid/gridItem";
import CustomTable, { TableItemPosicion } from "../../../table";
import Card, { CardBody } from "../../../card";
import SnackbarContent from '../../../snackbar';
import Loading from '../../../loading';

class TablaPosiciones extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            Posiciones: []
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
                Posiciones: posiciones.map(function (pos) {
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

    render() {

        if (this.state.error) {
            const message = (
                <span>
                    No se han cargado posiciones para el área seleccionada.
                </span>
            );
            return (
                <GridContainer>
                    <SnackbarContent message={message}
                        color="danger"
                    />
                </GridContainer>
            );
        }
        
        if(this.state.Posiciones.length === 0){
            return (
                <Loading />
            );
        }

        return (
            <GridContainer>
                <Card>
                    <CardBody>
                        <CustomTable color="info" tableHead={["Puesto", "Localidad", "Fecha", ""]}>
                            {this.state.Posiciones.map((prop, key) => {
                                return (
                                    <TableItemPosicion key={key} posicion={prop} color="info" />
                                )
                            })}                                
                        </CustomTable>
                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}

export default TablaPosiciones;
