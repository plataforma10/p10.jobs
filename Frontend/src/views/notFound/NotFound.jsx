import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout/layout.jsx';
import GridContainer from '../../components/grid/gridContainer.jsx';
import GridItem from '../../components/grid/gridItem.jsx';

// Estilos
import estilos from '../../assets/styles/views/home/homeStyle.jsx';

class NotFound extends Component {

    render() {
        const { classes } = this.props;
        return (
          <Layout className={classes.main}>
            <GridContainer>
              <GridItem>
                <div className={classes.container}>
                  <div className={classes.title}>
                    <h1>Pagina no Encontrada</h1>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </Layout>
        )
    };
}

export default withStyles(estilos)(NotFound)
