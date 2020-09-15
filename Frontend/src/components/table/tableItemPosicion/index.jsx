import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import styles from "../styles";

@withStyles(styles)
class TableItemPosicion extends PureComponent {
    render() {
        const { classes, color, posicion } = this.props;
        
        return (
            <TableRow>
                <TableCell className={classes.tableCell}>
                    <div>
                        <Link to={posicion.Path}>
                            <span>{ posicion.Titulo }</span>
                        </Link>
                        <strong className={classes.visiblexs}>{ posicion.Localidad }</strong>
                    </div>
                </TableCell>
                <TableCell className={classes.tableCell + " " + classes.visiblemd}>
                    { posicion.Localidad }
                </TableCell>
                <TableCell className={classes.tableCell + " " + classes.visiblemd}>
                    { posicion.FechaCreacion }
                </TableCell>
                <TableCell className={classes.tableCell}>
                    <Tooltip id={posicion.Titulo} title="Detalle" placement="top">
                        <Link to={posicion.Path}>
                            <IconButton className={classes[color]}>
                                <Info />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </TableCell>
            </TableRow>
        );
    }
}

TableItemPosicion.defaultProps = {
    color: "gray"
};
  
TableItemPosicion.propTypes = {
    color: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ])
};

export default TableItemPosicion;