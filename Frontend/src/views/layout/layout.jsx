import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Header from '../../components/header/header.jsx';
import Parallax from '../../components/parallax/parallax.jsx';
import GridContainer from '../../components/grid/gridContainer.jsx';
import GridItem from '../../components/grid/gridItem.jsx';
import Footer from '../../components/footer/Footer.jsx';
import logo from "../../assets/img/logoP10.jpg";
import imgParalax from "../../assets/img/bg4.jpg";
import axios from 'axios';
import SocialIcon from "../../components/iconos/SocialIcon.jsx";

// Estilos
import estilos from '../../assets/styles/views/layout/layoutStyle.jsx';

class Layout extends Component {
    constructor(){
        super();
        this.state = {
            Titulo: "Plataforma 10 Jobs",
            Descripcion: "Tu oprtunidad de empleo",
            Imagen: `/${imgParalax}`
        }
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        axios.get(`${process.env.HOST_BACK}/header/Home`)
        .then((res) => { 
            this.setState({
                Titulo: res.data.Titulo,
                Descripcion: res.data.Descripcion,
                Imagen: res.data.Imagen
            });    
        });    
    }

    render() {
        const { classes, children, header, ...rest } = this.props;

        return (
            <div>
                <Header brand="Plataforma 10" fixed color="transparent"
                    changeColorOnScroll={{ height: 400, color: "naranja" }}
                    srcLogo={`/${logo}`}
                    {...rest} />
                <Parallax image={`${header ? header.Imagen : this.state.Imagen }`}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand}>
                                    <h1 className={classes.title}>{header ? header.Titulo : this.state.Titulo}</h1>
                                    <h3 className={classes.subtitle}>
                                        {header ? header.Descripcion : this.state.Descripcion}
                                    </h3>
                                    <span className={classes.icon}>
                                        <SocialIcon icon="facebook" href="http://www.google.com.ar" tarjetBlanck/>
                                        <SocialIcon icon="google" />
                                        <SocialIcon icon="twitter" />
                                        <SocialIcon icon="linkedin" />
                                    </span>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>                
                <div className={classes.main}>
                    {children}
                </div>
              <Footer />
            </div>
        )
    };
}

export default withStyles(estilos)(Layout)