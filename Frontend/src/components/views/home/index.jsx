import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import AreasSeccion from './areasSeccion';
import axios from 'axios';
import { setHeader } from '../../../actions';
// Estilos
import estilos from './styles';

class Home extends Component {
  componentDidMount() {
      axios.get(`${process.env.HOST_BACK}/header/Home`)        
      .then((res) => res.data)
      .then((result) => this.onSetResult(result));
  }

  onSetResult = (header) => {
      this.props.dispatch(setHeader({
          Titulo: header.Titulo,
          Descripcion: header.Descripcion,
          Imagen: header.Imagen
      }));
  }

  render() {
      const { classes } = this.props;
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

function mapStateToProps(state) {
  return {
      state: state.app
  }
}

export default connect(mapStateToProps)(withStyles(estilos)(Home));