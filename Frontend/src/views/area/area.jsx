import React, { Component } from 'react';
import axios from 'axios';
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
        this.state = {
            Area: {}
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const area = localStorage.getItem(this.props.match.params.area);
        if (area) {
          this.setState({ Area: JSON.parse(area) });
          return;
        }    

        axios.get(`${process.env.HOST_BACK}/area/${this.props.match.params.area}`)
        .then((res) => res.data)
        .then((result) => this.onSetResult(result, this.props.match.params.area));    
    }

    onSetResult = (result, key) => {
        localStorage.setItem(key, JSON.stringify(result));
        this.setState({ Area: result });
    }

    render() {
        const { classes, ...rest } = this.props;

        return (
            <Layout className={classes.main} header={this.state.Area.Header}>
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
