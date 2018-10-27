import React, { Component }  from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "./styles";

import TableItemPosicion from './tableItemPosicion';

@withStyles(styles)
class CustomTable extends Component {
  render() {
    const { classes, tableHead, color, children } = this.props;
    return (
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[color]}>
              <TableRow>
                {tableHead.map((prop, key) => {
                  const classNameHead = classNames(
                    classes.tableCell, 
                    classes.tableHeadCell,{
                      [classes.visiblemd]: (key > 0 && prop)
                    });
                  return (
                    <TableCell
                      className={classNameHead}
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            { children }
          </TableBody>
        </Table>
      </div>
    );
  }
}

CustomTable.defaultProps = {
  color: "gray"
};

CustomTable.propTypes = {
  color: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string)
};

export { TableItemPosicion };
export default CustomTable;
