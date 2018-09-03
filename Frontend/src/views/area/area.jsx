import React, { Component } from 'react';
// Componentes
import TablaPosiciones from './secciones/tablaPosiciones.jsx';
// Views
import Layout from '../layout/layout.jsx';

class Area extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Layout>
                <TablaPosiciones area={this.props.match.params.area} />
            </Layout>
        );
    }
}

export default Area;
