import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import GalerryItemStyle from './styles';
import { Link } from "react-router-dom";


class GalleryItem extends Component {
    constructor(){
        super();
    }

    render() {
        const { classes, element } = this.props;
        const { Titulo, SubTitulo, Imagen, Path } = element;

        return(
            <div className={classes.contenedor} style={ Imagen ? { backgroundImage: `url(${Imagen})` } : {}}>
                <GridListTileBar title={Titulo} subtitle={<span>{SubTitulo}</span>}
                    actionIcon={
                        <Link to={`/area/${Path}`}>
                            <IconButton className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                        </Link>
                    }
                />
            </div>
        );
    };
}

export default withStyles(GalerryItemStyle)(GalleryItem);