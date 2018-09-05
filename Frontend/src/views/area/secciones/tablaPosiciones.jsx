import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
// Componentes
import GridItem from "../../../components/grid/gridItem.jsx";
import GridContainer from "../../../components/grid/gridContainer.jsx";
import CustomTable from "../../../components/table/customTable";
import Card from "../../../components/card/card.jsx";
import CardBody from "../../../components/card/cardBody.jsx";
import SnackbarContent from '../../../components/snackbar/snackbarContent.jsx';
import TableItemPosicion from '../../../components/table/tableItemPosicion.jsx';

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
        axios.get(`${process.env.HOST_BACK}/area/${area}`)
            .then((res) => {
                this.setState({
                    Posiciones: res.data.Posiciones.map(function (pos) {
                        return {
                            Titulo: `${pos.Titulo}`,
                            Localidad: `${pos.Localidad}`,
                            FechaCreacion: `${moment(pos.FechaCreacion).locale("es").format("DD-MMMM-YYYY")}`,
                            Path: `/area/posicion/${pos.Titulo}`
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
                            icon="info_outline"
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
                        {/* Acá va la paginación *
                         <CardFooter>
                            <Pagination pages={[
                                { text: 1 },
                                { text: "..." },
                                { text: 5 },
                                { text: 6 },
                                { active: true, text: 7 },
                                { text: 8 },
                                { text: 9 },
                                { text: "..." },
                                { text: 12 }
                            ]} />
                        </CardFooter> */}
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default TablaPosiciones;
