import React, { Component } from 'react';
// Componentes
import TablaPosiciones from './secciones/tablaPosiciones.jsx';
import GridContainer from '../../components/grid/gridContainer.jsx';
import GridItem from '../../components/grid/gridItem.jsx';
import withStyles from "@material-ui/core/styles/withStyles";

// Estilos
import estilos from '../../assets/styles/views/area/areaStyle.jsx';

// Views
import Layout from '../layout/layout.jsx';

class Area extends Component {
    constructor() {
        super();
    }

    render() {
        const { classes, ...rest } = this.props;

        return (
            <Layout className={classes.main}>
                <GridContainer>
                    <GridItem>
                        <div className={classes.container}>
                            <TablaPosiciones area={this.props.match.params.area} />
                        </div>
                    </GridItem>
                </GridContainer>
            </Layout>
        );
    }
}

export default withStyles(estilos)(Area);
