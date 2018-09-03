import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
// @material-ui/core components
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
// Componentes
import GridItem from "../../../components/grid/gridItem.jsx";
import GridContainer from "../../../components/grid/gridContainer.jsx";
import Table from "../../../components/table/table.jsx";
import Card from "../../../components/card/card.jsx";
import CardBody from "../../../components/card/cardBody.jsx";
import SnackbarContent from '../../../components/snackbar/snackbarContent.jsx';

class TablaPosiciones extends Component {
    constructor() {
        super();
        this.state = {
            AreaSinPosiciones: false,
            Posiciones: new Array(),
            Redireccion: false
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        var area = this.props.area;
        axios.get(`${process.env.HOST_BACK}/area/${area}`)
            .then((res) => {
                this.setState({
                    Posiciones: res.data.Posiciones.map(function (pos) {
                        return [
                            `${pos.Titulo}`,
                            `${pos.Localidad}`,
                            `${moment(pos.FechaCreacion).locale("es").format("DD-MMMM-YYYY")}`,
                            <Tooltip
                                id="tooltip-top"
                                title="Detalle"
                                placement="top"
                            >
                                <Link to={`/area/posicion/${pos.Titulo}`}>
                                    <IconButton>
                                        <Info />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        ]
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
        if (!this.state.Posiciones) {
            return <p>Buscar loader</p>;
        }

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
                            close
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
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["Puesto", "Localidad", "Fecha", ""]}
                                tableData={this.state.Posiciones}
                            />
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
