import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import { useDefaultHeader } from '../../Hooks/headerContext';

// Estilos
import styles from './styles';

const NotFound = props => {
  useDefaultHeader();
    const { classes } = props;
    return (
      <Layout className={classes.main}>
        <GridContainer>
          <GridItem>
            <div className={classes.container}>
              <div className={classes.title}>
                <h2>Pagina no Encontrada</h2>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </Layout>
    )
}

export default withStyles(styles)(NotFound)
