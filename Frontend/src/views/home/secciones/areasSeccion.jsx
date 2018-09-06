import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import Gallery from '../../../components/gallery/gallery';
import GalleryItem from '../../../components/gallery/galleryItem';
import axios from 'axios';
import Cargando from '../../../components/cargando/cargando'
import GridContainer from '../../../components/grid/gridContainer.jsx';

class AreasSeccion extends Component { 
    constructor(){
        super();
        this.state = {
            areas: [],
            error: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        axios.get(`${process.env.HOST_BACK}/areas`)
            .then((res) => {
                console.log(res.data); 
                this.setState({
                    areas: res.data.map((prop) => {
                        return {
                            Titulo: prop.Nombre,
                            SubTitulo: prop.SubTitulo,
                            Path: prop.Path,
                            Imagen: prop.Header ? prop.Header.Imagen : ""
                        }
                    })
                });    
            });
    }

    render(){
        return(
          <GridContainer justify="center">
            {
              this.state.areas.length > 0 ? 
              (<Gallery>
                {this.state.areas.map(item => (
                    <GridListTile key={item.Path} cols={1}>
                        <GalleryItem element={item} />
                    </GridListTile>
                ))}
                </Gallery>) : (<Cargando />)
            }
          </GridContainer>
        );
    };
}

export default AreasSeccion;