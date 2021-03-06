import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Layout from '../layout/layout.jsx';
import GridContainer from '../../components/grid/gridContainer.jsx';
import GridItem from '../../components/grid/gridItem.jsx';
import Modal from '../../components/modal/modal.jsx';
import showdown  from 'showdown';
import axios from 'axios';
import NotMatch from '../../components/notMatch/NotMacth.jsx';

// Estilos
import posicionStyle from '../../assets/styles/views/posicion/posicionStyle.jsx';

class Posicion extends Component {
    constructor(){
      super();
      this.state = {
        Titulo: "",
        Descripcion: "",
        NoEncontrado: false
      }
      this.componentWillMount = this.componentWillMount.bind(this);
    }
    
    componentWillMount() {
      var area = this.props.match.params.area;
      var posicion = this.props.match.params.posicion;
      axios.get(`${process.env.HOST_BACK}/area/${area}/${posicion}`)
        .then((res) => {
          var converter = new showdown.Converter();
          this.setState({
            Titulo: res.data.Titulo,
            Descripcion: converter.makeHtml(res.data.Descripcion)
          });
        })
        .catch(() => {
          this.setState({
            NoEncontrado: true
          });
        });
    }

    render() {
        const { classes } = this.props;

        if (this.state.NoEncontrado) {
          return <NotMatch/>;
        }

        return (
            <Layout>
              <GridContainer>
                <GridItem>
                  <div className={classes.container}>
                    <div className={classes.title}>
                      <h1>{this.state.Titulo}</h1>
                    </div>
                    <div>
                      <span dangerouslySetInnerHTML={{__html: this.state.Descripcion}}>
                      </span>
                    </div>
                  </div>
                </GridItem>
                <GridItem>
                  <div className={`${classes.container} ${classes.buttonRight}`}>
                    <Modal  nombre={"Postularme"}/>
                  </div>
                </GridItem>
              </GridContainer>
            </Layout>
        )
    };
}

export default withStyles(posicionStyle)(Posicion)
