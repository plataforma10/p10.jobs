import React, { useState, useEffect } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import Modal from '../../modal';
import showdown  from 'showdown';
import axios from 'axios';
import NotMatch from '../../notMatch';
import Loading from '../../loading'
import { useDefaultHeader } from '../../Hooks/headerContext';
import BotonLink from '../../buttons/botonLink';

// Estilos
import styles from './styles';

const Posicion = props => {
  useDefaultHeader();
  const [posicion, setPosision] = useState({
    Titulo: "",
    Descripcion: "",
    NoEncontrado: false
  });
      
  const { classes } = props;
  const areaName = props.match.params.area;  
  const posicionName = props.match.params.posicion;  

  useEffect(() => {
    axios.get(`${process.env.HOST_BACK}/area/${areaName}/posicion/${posicionName}`)
      .then((res) => onSetResult(res.data))
      .catch(() => setPosision({
        NoEncontrado: true 
      }));
  }, []);

  function onSetResult (posicion) {
    var converter = new showdown.Converter();
    setPosision({
      Titulo: posicion.Titulo,
      Descripcion: converter.makeHtml(posicion.Descripcion)
    });    
  }

  if (posicion.NoEncontrado) {
    return <NotMatch />
  }

  return (
      <Layout>
        <GridContainer>
        {!posicion.Titulo && !posicion.Descripcion && !posicion.NoEncontrado ? 
          (<GridItem className={classes.container}>
            <Loading/>
          </GridItem>) :
          (<div className={classes.container}>
            <GridItem>
              <h1 className={classes.title}>{posicion.Titulo}</h1>
              <span dangerouslySetInnerHTML={{__html: posicion.Descripcion}}></span>
            </GridItem>
            <GridItem className={classes.botones}>
                <BotonLink path={`/area/${areaName}`}>
                  Volver a {areaName}
                </BotonLink>
                <Modal nombre={"Postularme"} area={areaName} posicion={posicionName}/>
            </GridItem>
          </div>)
        }
        </GridContainer>
      </Layout>
  );
}

export default withStyles(styles)(Posicion);
