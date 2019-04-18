import React, { useEffect } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import AreasSeccion from './areasSeccion';
import axios from 'axios';
// Estilos
import styles from './styles';
import { useHeaderContext } from '../../Hooks/headerContext';


const Home = props => 
{
  const { classes } = props;
  const dispatch = useHeaderContext()[1];

  useEffect(() => {
    axios.get(`${process.env.HOST_BACK}/header/Home`)        
      .then((res) => res.data)
      .then((result) => onSetResult(result));
  }, []);

  function onSetResult (header) {
    dispatch({
        title: header.Titulo,
        description: header.Descripcion,
        image: header.Imagen
      });
  }
  
  return (
    <Layout className={classes.main}>
      <GridContainer>
        <GridItem >
            <div className={classes.container}>
                <AreasSeccion />
            </div>
        </GridItem>
      </GridContainer>
    </Layout>
  )
}

export default withStyles(styles)(Home);
