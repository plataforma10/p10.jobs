import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import TilebarGridList from '../../../components/gallery/tileBarGridList';
import GridListItem from '../../../components/gallery/gridListItem';
import axios from 'axios';

const areas = [
    {
      img: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      title: 'Tecnologia',
      detalle: 'Desarrollo de aplicaciones',
      cols: 1,
      featured: true,
    },
    {
      img: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      title: 'Comercial',
      detalle: 'Area de ventas',
      cols: 1,
    }
    ,
    {
      img: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      title: 'Administracion',
      detalle: 'Area contable',
      cols: 1,
    },
    {
      img: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      title: 'Producto',
      detalle: 'Area de negocios',
      featured: true,
    },
    {
      img: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      title: 'Hats',
      detalle: 'Hans',
    },
    {
      img: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      title: 'Honey',
      detalle: 'fancycravel',
    },
    {
      img: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      title: 'Vegetables',
      detalle: 'jill111',
      cols: 2,
    },
    {
      img: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      title: 'Water plant',
      detalle: 'BkrmadtyaKarki',
    },
    {
      img: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      title: 'Mushrooms',
      detalle: 'PublicDomainPictures',
    },
    {
      img: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      title: 'Olive oil',
      detalle: 'congerdesign',
    },
    {
      img: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      title: 'Sea star',
      cols: 2,
      detalle: '821292',
    },
    {
      img: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      title: 'Bike',
      detalle: 'danfador',
    }
  ];

class AreasSeccion extends Component { 
    constructor(){
        super();
        this.state = {
            areas: []
        }
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount(){
        axios.get(`${process.env.HOST_BACK}/area`)
            .then((res) => { 
                this.setState({
                    areas: res.data
                });    
            });
    }

    render(){
        return(
            <TilebarGridList>
                {this.state.areas.map(item => (
                    <GridListTile key={item.img} cols={item.cols || 1}>
                        <GridListItem element={item} />
                    </GridListTile>
                ))}
            </TilebarGridList>
        );
    };
}

export default AreasSeccion;