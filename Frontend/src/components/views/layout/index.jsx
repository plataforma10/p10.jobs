import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Header from '../../header';
import Parallax from '../../parallax';
import GridContainer from '../../grid/gridContainer';
import Footer from '../../footer';
import logo from "../../../../public/img/logoP10.jpg";
import SocialIcon from "../../icons/socialIcon";
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
                            <span className={classes.icon}>
                                <SocialIcon icon="facebook" href={process.env.Facebook} tarjetBlank/>
                                <SocialIcon icon="twitter" href={process.env.Twitter} tarjetBlank/>
                                <SocialIcon icon="linkedin" href={process.env.Linkedin} tarjetBlank/>
                                <SocialIcon icon="instagram" href={process.env.Instagram} tarjetBlank/>
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