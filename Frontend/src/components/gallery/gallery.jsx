import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import TileBarGridListStyle from '../../assets/styles/components/tileBarGridListStyle';

class TilebarGridList extends Component {
    constructor(){
        super();
    }
    render(){
        const { classes, children } = this.props;

        return (
          <div className={classes.root}>
            <GridList cellHeight={230} className={classes.gridList} cols={4}>
              <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                <ListSubheader component="div">Areas</ListSubheader>
              </GridListTile>
              { children }
            </GridList>
          </div>
        );  
    };
  }
  
  TilebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(TileBarGridListStyle)(TilebarGridList);