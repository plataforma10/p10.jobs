import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import Modal from '../../modal';
import showdown  from 'showdown';
import axios from 'axios';
import NotMatch from '../../notMatch';
import Loading from '../../loading'
import { HeaderDefecto } from '../../HOCs';
import BotonLink from '../../buttons/botonLink';

// Estilos
import posicionStyle from './styles';

@HeaderDefecto
@withStyles(posicionStyle)
class Posicion extends Component {
    constructor(){
      super();
      this.state = {
        Titulo: "",
        Descripcion: "",
        NoEncontrado: false
      };
    }
    
    componentDidMount() {
      var area = this.props.match.params.area;
      var posicion = this.props.match.params.posicion;
      axios.get(`${process.env.HOST_BACK}/area/${area}/posicion/${posicion}`)
        .then((res) => this.onSetResult(res.data))
        .catch(() => this.setState({NoEncontrado: true}));
    }

    onSetResult = (posicion) => {
      var converter = new showdown.Converter();
      this.setState({
        Titulo: posicion.Titulo,
        Descripcion: converter.makeHtml(posicion.Descripcion)
      });    
    }

    render() {
        const { classes } = this.props;
        const area = this.props.match.params.area;
        if (this.state.NoEncontrado) {
          return <NotMatch />
        }

        return (
            <Layout>
              <GridContainer>
              {!this.state.Titulo && !this.state.Descripcion && !this.state.NoEncontrado ? 
                (<GridItem className={classes.container}>
                  <Loading/>
                </GridItem>) :
                (<div className={classes.container}>
                  <GridItem>
                    <h1 className={classes.title}>{this.state.Titulo}</h1>
                    <span dangerouslySetInnerHTML={{__html: this.state.Descripcion}}></span>
                  </GridItem>
                  <GridItem className={classes.botones}>
                      <BotonLink path={`/area/${area}`}>
                        Volver a {area}
                      </BotonLink>
                      <Modal nombre={"Postularme"} area={this.props.match.params.area} posicion={this.props.match.params.posicion}/>
                  </GridItem>
                </div>)
              }
              </GridContainer>
            </Layout>
        );
    };
}

export default Posicion
