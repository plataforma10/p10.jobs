import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import Gallery, { GalleryItem } from '../../../gallery';
import axios from 'axios';
import Loading from '../../../loading'
import GridContainer from '../../../grid/gridContainer';

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
        const areas = localStorage.getItem("areas");
        if (areas) {
          this.setState({ areas: JSON.parse(areas) });
          return;
        }    

        axios.get(`${process.env.HOST_BACK}/areas`)
            .then((res) => res.data)
            .then((result) => this.onSetResult(result, "areas"));  
    }

    onSetResult = (result, key) => {        
        var areas = result.map((prop) => {
            return {
                Titulo: prop.Nombre,
                SubTitulo: prop.SubTitulo,
                Path: prop.Path,
                Imagen: prop.Header ? prop.Header.Imagen : ""
            }
        });
        this.setState({ areas: areas });   
        localStorage.setItem(key, JSON.stringify(areas));
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
                </Gallery>) : (<Loading />)
            }
          </GridContainer>
        );
    };
}

export default AreasSeccion;