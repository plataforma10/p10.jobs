// React
import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Componentes
import Boton from './boton';

class BotonLink extends PureComponent {
    render() {
        const { path, children, ...rest } = this.props;
        return (
            <Link to={path}>
                <Boton {...rest}>
                    {children}
                </Boton>
            </Link>
        );
    }
}  

BotonLink.propTypes = {
    path: PropTypes.string.isRequired
};

export default BotonLink;