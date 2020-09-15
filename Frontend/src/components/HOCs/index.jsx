import React from "react";
import { connect } from 'react-redux';
import { setHeader } from '../../actions';

const mapStateToProps = (state) => {
    return {
        state: state.app
    }
}

const reduxConnect = WrappedComponent => {
    return connect(mapStateToProps)(class extends React.Component{
        render() {
            return <WrappedComponent {...this.props} />;
          }
    })
}

const HeaderDefecto = WrappedComponent => {
    return connect(mapStateToProps)(class extends React.Component{
        componentDidMount() {
            this.props.dispatch(setHeader({
                Titulo: "Plataforma 10",
                Descripcion: "Queremos que trabajes con nosotros.",
                Imagen: require('../../../public/img/bg4.jpg')
            }));
        }

        render() {
            return <WrappedComponent {...this.props} />;
          }
    })
}

export { reduxConnect, HeaderDefecto };