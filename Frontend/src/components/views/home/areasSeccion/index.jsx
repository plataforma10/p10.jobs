import React, { useState, useEffect } from 'react';
// Componentes
import Gallery, { GalleryItem } from '../../../gallery';
import axios from 'axios';
import Loading from '../../../loading'
import GridContainer from '../../../grid/gridContainer';

const AreasSeccion = () => {
    const [areas, setAreas] = useState({error: false});

    useEffect(() => {
        axios.get(`${process.env.HOST_BACK}/areas`)
            .then((res) => res.data)
            .then((result) => onSetResult(result))
            .catch(() => setAreas({ error: true }));
    }, []);

    function onSetResult(result) {        
        var areas = result.map((area) => {
            return {
                Titulo: area.Nombre,
                SubTitulo: area.SubTitulo,
                Path: area.Path,
                Imagen: area.Header ? area.Header.Imagen : ""
            }
        });
        setAreas(areas);
    }

    if(areas.error){
        return(
            <GridContainer justify="center">
                <h4>Ah ocurrido un error</h4>
            </GridContainer>
        );
    }

    if(!areas.length){
        return(
            <Loading />
        );
    }

    return(
        <GridContainer justify="center">
            <Gallery>
                {areas.map(item => (
                    <GalleryItem key={item.Path} element={item} />
                ))}
            </Gallery>
        </GridContainer>
    );
}

export default AreasSeccion;