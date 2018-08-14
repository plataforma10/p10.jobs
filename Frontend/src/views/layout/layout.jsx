import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Header from '../../components/header/header.jsx';
import Parallax from '../../components/parallax/parallax.jsx';
import GridContainer from '../../components/grid/gridContainer.jsx';
import GridItem from '../../components/grid/gridItem.jsx';
import Footer from '../../components/footer/Footer.jsx';
import logo from "../../assets/img/logoP10.jpg";
import imgaenParalax from "../../assets/img/bg4.jpg";
// Estilos
import estilos from '../../assets/styles/views/layout/layoutStyle.jsx';

class Layout extends Component {
    render() {
        const { classes, children, ...rest } = this.props;
        return (
            <div>
                <Header brand="Plataforma 10" fixed color="transparent"
                    changeColorOnScroll={{ height: 400, color: "naranja" }}
                    srcLogo={`/${logo}`}
                    {...rest} />
                <Parallax image={`/${imgaenParalax}`}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand}>
                                    <h1 className={classes.title}>Plataforma 10 Jobs.</h1>
                                    <h3 className={classes.subtitle}>
                                        Tu oportunidad de empleo
                                    </h3>
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