import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// Componentes
import Header from '../../header';
import Parallax from '../../parallax';
import GridContainer from '../../grid/gridContainer';
import Footer from '../../footer';
import logo from "../../../../public/img/logoP10.jpg";
import { Facebook, Linkeding, Twitter } from "../../icons";
import { useHeaderContext } from '../../Hooks/headerContext';

// Estilos
import styles from './styles';

const Layout = props => 
{
    const [ header ] = useHeaderContext();
    const { classes, children, ...rest } = props;

    return (
        <div>
            <Header brand="Plataforma 10" fixed color="transparent" changeColorOnScroll={{ height: 120, color: "naranja" }}
                srcLogo={`${logo}`} {...rest} />
            <Parallax image={`${header.image}`}>
                <GridContainer className={classes.container}>
                    <div className={classes.brand}>
                        <h2 className={classes.title}>{header.title}</h2>
                        <h3 className={classes.subtitle}>
                            {header.description}
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
}

export default withStyles(styles)(Layout);