import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Header from '../../header';
import Parallax from '../../parallax';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import Footer from '../../footer';
import logo from "../../../../public/img/logoP10.jpg";
import imgParalax from "../../../../public/img/bg4.jpg";
import axios from 'axios';
import SocialIcon from "../../icons/socialIcon";

// Estilos
import estilos from './styles';

class Layout extends Component {
    constructor(){
        super();
        this.state = {
            Titulo: "Plataforma 10 Jobs",
            Descripcion: "Tu oprtunidad de empleo",
            Imagen: `/${imgParalax}`
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const header = localStorage.getItem("header/Home");
        if (header) {
            var home = JSON.parse(header);
            this.setState({
                Titulo: home.Titulo,
                Descripcion: home.Descripcion,
                Imagen: home.Imagen
            });
            return;
        }  

        axios.get(`${process.env.HOST_BACK}/header/Home`)        
        .then((res) => res.data)
        .then((result) => this.onSetResult(result, "header/Home"));
    }

    onSetResult = (result, key) => {
        localStorage.setItem(key, JSON.stringify(result));
        this.setState({
            Titulo: result.Titulo,
            Descripcion: result.Descripcion,
            Imagen: result.Imagen
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