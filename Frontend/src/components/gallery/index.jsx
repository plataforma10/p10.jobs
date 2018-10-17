import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import styles from './styles';

import GalleryItem from './galleryItem';

class Gallery extends PureComponent {
    render(){
        const { classes, children } = this.props;

        return (
            <GridList cellHeight={230} className={classes.gridList}>        
              { children }
            </GridList>
        );  
    };
  }
  
  Gallery.propTypes = {
    classes: PropTypes.object.isRequired,
    titulo: PropTypes.string
  };
  
  export { GalleryItem };
  export default withStyles(styles)(Gallery);