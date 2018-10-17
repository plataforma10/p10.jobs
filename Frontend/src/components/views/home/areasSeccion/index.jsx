import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return(
            <div>
                {
                    !this.state.error ?
                <GridContainer justify="center">
                    {
                    this.props.state.newState.areas.length > 0 ? 
                    (<Gallery>
                        {this.props.state.newState.areas.map(item => (
                            <GalleryItem key={item.Path} element={item} />
                        ))}
                    </Gallery>) : (<Loading />)
                    }
                </GridContainer>
                : <GridContainer justify="center">
                    <h4>Ah Ocurrido Un Error</h4>
                </GridContainer>
                }
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        state: state.app
    }
}

export default connect(mapStateToProps)(AreasSeccion);