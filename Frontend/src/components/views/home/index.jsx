import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import AreasSeccion from './areasSeccion';
// Estilos
import estilos from './styles';

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
