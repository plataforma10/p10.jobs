import React, { Component } from 'react';
import { connect } from 'react-redux';
// Componentes
import Gallery, { GalleryItem } from '../../../gallery';
import axios from 'axios';
import Loading from '../../../loading'
import GridContainer from '../../../grid/gridContainer';
import { setAreas } from '../../../../actions';

class AreasSeccion extends Component { 
    constructor(){
        super();
        this.state = {
            error: false
        }
    }

    componentDidMount(){
        axios.get(`${process.env.HOST_BACK}/areas`)
            .then((res) => res.data)
            .then((result) => this.onSetResult(result))
            .catch(() => this.setState({ error: true }));  
    }

    onSetResult = (result) => {        
        var areas = result.map((prop) => {
            return {
                Titulo: prop.Nombre,
                SubTitulo: prop.SubTitulo,
                Path: prop.Path,
                Imagen: prop.Header ? prop.Header.Imagen : ""
            }
        });
        this.props.dispatch(setAreas(areas));
    }

    render(){
        if(this.state.error){
            return(
                <GridContainer justify="center">
                    <h4>Ah ocurrido un error</h4>
                </GridContainer>
            );
        }

        if(!this.props.state.newState.areas.length){
            return(
                <Loading />
            );
        }

        return(
            <GridContainer justify="center">
                <Gallery>
                    {this.props.state.newState.areas.map(item => (
                        <GalleryItem key={item.Path} element={item} />
                    ))}
                </Gallery>
            </GridContainer>
        );
    };
}

function mapStateToProps(state) {
    return {
        state: state.app
    }
}

export default connect(mapStateToProps)(AreasSeccion);