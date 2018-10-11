import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Header from '../../header';
import Parallax from '../../parallax';
import GridContainer from '../../grid/gridContainer';
import GridItem from '../../grid/gridItem';
import Footer from '../../footer';
import logo from "../../../../public/img/logoP10.jpg";
import imgParalax from "../../../../public/img/bg4.jpg";
import SocialIcon from "../../icons/socialIcon";
import { setHeader } from '../../../actions';

// Estilos
import estilos from './styles';

class Layout extends Component {

    componentDidMount() {
        if(!this.props.state.newState.header){
            this.props.dispatch(setHeader({
                Titulo: "Plataforma 10 Jobs",
                Descripcion: "Tu oprtunidad de empleo",
                Imagen: `${imgParalax}`
            }));
        }
    }

    render() {
        const { classes, children, ...rest } = this.props;

        return (
            <div>
                <Header brand="Plataforma 10" fixed color="transparent"
                    changeColorOnScroll={{ height: 400, color: "naranja" }}
                    srcLogo={`${logo}`}
                    {...rest} />
                <Parallax image={`${this.props.state.newState.header.Imagen}`}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand}>
                                    <h1 className={classes.title}>{this.props.state.newState.header.Titulo}</h1>
                                    <h3 className={classes.subtitle}>
                                        {this.props.state.newState.header.Descripcion}
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

function mapStateToProps(state) {
    return {
        state: state.app
    }
}

export default connect(mapStateToProps)(withStyles(estilos)(Layout));