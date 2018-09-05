import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GalleryStyle from '../../assets/styles/components/galleryStyle';

class Gallery extends Component {
    constructor(){
        super();
    }
    render(){
        const { classes, children, titulo } = this.props;

        return (
          <div className={classes.root}>
            <GridList cellHeight={230} className={classes.gridList} cols={4}>
              { titulo ? (<GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                <ListSubheader className={classes.titulo} component="h1">{ titulo }</ListSubheader>
              </GridListTile>) : null}              
              { children }
            </GridList>
          </div>
        );  
    };
  }
  
  Gallery.propTypes = {
    classes: PropTypes.object.isRequired,
    titulo: PropTypes.string
  };
  
  export default withStyles(GalleryStyle)(Gallery);