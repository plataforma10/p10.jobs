import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from "classnames";

import axios from 'axios';
// Componentes
import TablaPosiciones from './tablaPosiciones';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import withStyles from "@material-ui/core/styles/withStyles";
import { setHeader } from '../../../actions';
import BotonLink from '../../buttons/botonLink';

// Estilos
import estilos from './styles';

// Views
import Layout from '../layout';

class Area extends Component {
    constructor() {
        super();
        this.state = {
            area: {}
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get(`${process.env.HOST_BACK}/area/${this.props.match.params.area}`)
            .then((res) => res.data)
            .then((result) => this.onSetResult(result));    
    }

    onSetResult = (area) => {
        this.setState({ area: area });
        this.props.dispatch(setHeader(area.Header));
    }

    render() {
        const { classes } = this.props;
        
        return (
            <Layout className={classes.main}>
                <GridContainer>
                    <GridItem className={classNames(classes.container, classes.noPadding)}>
                            <TablaPosiciones area={this.props.match.params.area} />
                    </GridItem>
                    <GridItem className={classNames(classes.container)}>
                        <BotonLink path='/' color='info'>Volver atras</BotonLink>
                    </GridItem>
                </GridContainer>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.app
    }
}

export default connect(mapStateToProps)(withStyles(estilos)(Area));
