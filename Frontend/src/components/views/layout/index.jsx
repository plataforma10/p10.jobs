import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Header from '../../header';
import Parallax from '../../parallax';
import GridContainer from '../../grid/gridContainer';
import Footer from '../../footer';
import logo from "../../../../public/img/logoP10.jpg";
import { Facebook, Linkeding, Twitter } from "../../icons";
import { reduxConnect } from '../../HOCs';

// Estilos
import estilos from './styles';

@reduxConnect
@withStyles(estilos)
class Layout extends Component {
    render() {
        const { classes, children, ...rest } = this.props;
        return (
            <div>
                <Header brand="Plataforma 10" fixed color="transparent" changeColorOnScroll={{ height: 120, color: "naranja" }}
                    srcLogo={`${logo}`} {...rest} />
                <Parallax image={`${this.props.state.newState.header.Imagen}`}>
                    <GridContainer className={classes.container}>
                        <div className={classes.brand}>
                            <h2 className={classes.title}>{this.props.state.newState.header.Titulo}</h2>
                            <h3 className={classes.subtitle}>
                                {this.props.state.newState.header.Descripcion}
                            </h3>
                            <span>
                                <Facebook className={classes.icon} href={process.env.Facebook} target="_blank" rel="noopener noreferrer"/>
                                <Linkeding className={classes.icon} href={process.env.Twitter} target="_blank" rel="noopener noreferrer"/>
                                <Twitter className={classes.icon} href={process.env.Linkedin} target="_blank" rel="noopener noreferrer"/>
                            </span>
                        </div>
                    </GridContainer>
                </Parallax>                
                <div className={classes.main}>
                    {children}
                </div>
                <Footer />
            </div>
        )
    };
}

export default Layout;