import React, { PureComponent } from 'react';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Link } from "react-router-dom";

@withStyles(styles)
class GalleryItem extends PureComponent {
    render() {
        const { classes, element } = this.props;
        const { Titulo, SubTitulo, Imagen, Path } = element;

        return(
            <div className={classes.contenedor}>
                <GridListTile key={Imagen}>
                    <Link to={`/area/${Path}`}>
                        <img src={Imagen} alt={Titulo} className={classes.imagen}/>
                        <GridListTileBar title={Titulo} subtitle={<span>{SubTitulo}</span>}/>
                    </Link>
                </GridListTile>
            </div>
        );
    };
}

export default GalleryItem;