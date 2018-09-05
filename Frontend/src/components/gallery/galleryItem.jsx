import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import GalerryItemStyle from '../../assets/styles/components/galleryItemStyle';


class GalleryItem extends Component {
    constructor(){
        super();
    }

    render() {
        const { classes, element } = this.props;
        const { Header, Nombre, Descripcion } = element;

        return(
            <div className={classes.contenedor} style={ Header ? { backgroundImage: `url(${Header.Imagen})` } : {}}>
                <GridListTileBar title={Nombre} subtitle={<span>{Descripcion}</span>}
                    actionIcon={
                        <IconButton className={classes.icon}>
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </div>
        );
    };
}

export default withStyles(GalerryItemStyle)(GalleryItem);