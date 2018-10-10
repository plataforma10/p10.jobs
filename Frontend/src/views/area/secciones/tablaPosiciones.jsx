import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
// Componentes
import GridItem from "../../../components/grid/gridItem";
import GridContainer from "../../../components/grid/gridContainer";
import CustomTable, { TableItemPosicion } from "../../../components/table";
import Card, { CardBody } from "../../../components/card";
import SnackbarContent from '../../../components/snackbar';

class TablaPosiciones extends Component {
    constructor() {
        super();
        this.state = {
            AreaSinPosiciones: false,
            Posiciones: []
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        var area = this.props.area;
        axios.get(`${process.env.HOST_BACK}/area/${area}/posiciones`)
            .then((res) => {
                this.setState({
                    Posiciones: res.data.map(function (pos) {
                        return {
                            Titulo: `${pos.Titulo}`,
                            Localidad: `${pos.Localidad}`,
                            FechaCreacion: `${moment(pos.FechaCreacion).locale("es").format("DD-MMMM-YYYY")}`,
                            Path: `/area/${area}/${pos.Path}`
                        }
                    })
                });
            })
            .catch(() => {
                this.setState({
                    AreaSinPosiciones: true
                });
            });
    }

    render() {
        if (this.state.AreaSinPosiciones) {
            return (
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <SnackbarContent
                            message={
                                <span>
                                    No se han cargado posiciones para el área seleccionada.
                                </span>
                            }
                            color="danger"
                        />
                    </GridItem>
                </GridContainer>);
        }

        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardBody>
                            <CustomTable
                                tableHeaderColor="info"
                                tableHead={["Puesto", "Localidad", "Fecha", ""]}>
                                {this.state.Posiciones.map((prop, key) => {
                                        return (
                                            <TableItemPosicion key={key} posicion={prop} />
                                        )
                                    })}                                
                            </CustomTable>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default TablaPosiciones;
