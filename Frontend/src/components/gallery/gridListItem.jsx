import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';

const Estilos = {
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    }
}

class GridListItem extends Component {
    constructor(){
        super();
    }

    render() {
        const { classes, element } = this.props;

        return(
            <div>
                <img src={element.img} alt={element.title} />
                <GridListTileBar
                title={element.title}
                subtitle={<span>{element.detalle}</span>}
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

export default withStyles(Estilos)(GridListItem);