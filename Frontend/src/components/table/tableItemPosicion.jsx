import React, { Component } from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import tableStyle from "../../assets/styles/components/tableStyle.jsx";

class TableItemPosicion extends Component {
    constructor() {
        super();
    }

    render() {
        const { classes, posicion } = this.props;
        
        return (
            <TableRow>
                <TableCell className={classes.tableCell}>
                    { posicion.Titulo }
                </TableCell>
                <TableCell className={classes.tableCell}>
                    { posicion.Localidad }
                </TableCell>
                <TableCell className={classes.tableCell}>
                    { posicion.FechaCreacion }
                </TableCell>
                <TableCell className={classes.tableCell}>
                    <Tooltip id={posicion.Titulo} title="Detalle" placement="top">
                        <Link to={posicion.Path}>
                            <IconButton>
                                <Info />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </TableCell>
            </TableRow>
        );
    }
}

export default withStyles(tableStyle)(TableItemPosicion);