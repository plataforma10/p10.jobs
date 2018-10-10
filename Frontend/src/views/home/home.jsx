import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout/layout.jsx';
import GridContainer from '../../components/grid/gridContainer';
import GridItem from '../../components/grid/gridItem';
import AreasSeccion from './secciones/areasSeccion.jsx';
// Estilos
import estilos from '../../assets/styles/views/home/homeStyle.jsx';

class Home extends Component {
  render() {
      const { classes, ...rest } = this.props;
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
  };
}

export default withStyles(estilos)(Home)
