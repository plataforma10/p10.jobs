import React, { useEffect, useState } from 'react';
import classNames from "classnames";

import axios from 'axios';

// Componentes
import TablaPosiciones from './tablaPosiciones';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import withStyles from "@material-ui/core/styles/withStyles";
import BotonLink from '../../buttons/botonLink';
import NotMatch from '../../notMatch';
import { useHeaderContext } from '../../Hooks/headerContext';

// Estilos
import styles from './styles';

// Views
import Layout from '../layout';

const Area = props => {
    const dispatch = useHeaderContext()[1];
    const setArea = useState({})[1];
    const [error, setError] = useState(false);
    const { classes } = props;
    const areaName = props.match.params.area;

    useEffect(() => {
        axios.get(`${process.env.HOST_BACK}/area/${areaName}`)
            .then((res) => res.data)
            .then((result) => onSetResult(result))
            .catch(() => onSetError());
    }, []);

    function onSetResult(area) {
        setArea(area);
        dispatch({
            title: area.Header.Titulo,
            description: area.Header.Descripcion,
            image: area.Header.Imagen
          });
    }

    function onSetError() {
        setError(true);
    }
    
    if(error){
        return (
            <NotMatch />
        );
    }

    return (
        <Layout className={classes.main}>
            <GridContainer>
                <GridItem className={classNames(classes.container, classes.noPadding)}>
                        <TablaPosiciones area={areaName} />
                </GridItem>
                <GridItem className={classNames(classes.container)}>
                    <BotonLink path='/' color='info'>Volver atras</BotonLink>
                </GridItem>
            </GridContainer>
        </Layout>
    );
}

export default withStyles(styles)(Area);
