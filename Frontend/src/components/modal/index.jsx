import React from 'react';
import PropTypes from "prop-types";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Boton from '../buttons/boton';
import SnackbarContent from '../snackbar/index.jsx';
import CustomInput from '../customInput';
import styles from "./styles";
import Upload from '../buttons/upload';
import axios from 'axios';
import Recaptcha from "react-recaptcha";

const sitekey = process.env.SITE_KEY;

let recaptchaInstance;

const resetRecaptcha = () => {
  recaptchaInstance.reset();
};

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

@withStyles(styles)
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.textInputs = React.createRef();
    this.state = {
      modal: false,
      archivo: null,
      error: false,
      mensajeError: "",
      nombre: "",
      formularioHabilitado: false
    };
  }

  verifyCallback = (response) => {
    this.setState({
      formularioHabilitado: true
    });
  };

  handleClickOpen() {
    this.setState({
      modal: true
    });
  }

  handleClose() {
    resetRecaptcha();
    this.setState({
      modal: false,
      error: false,
      nombre: "",
      apellido: "",
      email: "",
      reiniciado: true,
      formularioHabilitado: false
    });
  }

  acceptPostulacion(area, posicion) {
    this.setState({ error: false });

    if (this.validar()) {
      const { nombre, apellido, email, archivo } = this.state;

      var data = new FormData();
      data.append('area', area);
      data.append('posicion', posicion);
      data.append('nombre', nombre);
      data.append('apellido', apellido);
      data.append('email', email);
      data.append('file', archivo);

      axios.post(`${process.env.HOST_BACK}/crearissue/`, data)
        .then((res) => {
          this.handleClose();
        })
        .catch((err) => {
          this.setState({ error: true, mensajeError: "Ah ocurrido un error. Vuelva a intertar la operación." });
        });
    }
  }

  handleUploadFile = (event) => {
    this.setState({ archivo: event.target.files[0], reiniciado: false });
  }

  validar = () => {
    if (!this.state.nombre || !this.state.apellido || !this.state.email || !this.state.archivo) {
      this.setState({ error: true, mensajeError: "Debe completar todos los campos." });
      return false;
    }
    return true;
  }

  handleInputChange(event) {
    this.setState(
      {
        [event.target.id]: event.target.value,
        [`${event.target.id}Requerido`]: !event.target.value
      });
  }

  render() {
    const { classes, btnPosicion, area, posicion } = this.props;
    return (
      <div className={`${classes.container} ${classes[btnPosicion]}`}>
        <Boton color="rose" onClick={() => this.handleClickOpen()}>
          {this.props.nombre}
        </Boton>
        <Dialog classes={{ root: classes.center, paper: classes.modal }} open={this.state.modal} TransitionComponent={Transition} keepMounted
          onClose={() => this.handleClose()} aria-labelledby="modal-slide-title" aria-describedby="modal-slide-description">
          <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
            <IconButton className={classes.modalCloseButton} key="close" aria-label="Close"
              color="inherit" onClick={() => this.handleClose()}>
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Completa el siguiente formulario</h4>
          </DialogTitle>
          <DialogContent id="modal-slide-description" className={classes.modalBody}>
            {
              this.state.error ?
                (<SnackbarContent
                  message={
                    <span>{this.state.mensajeError}</span>
                  }
                  color="danger"
                />) : null
            }
            <CustomInput labelText="Nombre" id="nombre"
              formProps={{ fullWidth: true, onChange: this.handleInputChange.bind(this) }}
              inputProps={{ value: this.state.nombre }}
              error={this.state.nombreRequerido} />
            <CustomInput labelText="Apellido" id="apellido"
              formProps={{ fullWidth: true, onChange: this.handleInputChange.bind(this) }}
              inputProps={{ value: this.state.apellido }}
              error={this.state.apellidoRequerido} />
            <CustomInput labelText="Email" id="email"
              formProps={{ fullWidth: true, onChange: this.handleInputChange.bind(this) }}
              inputProps={{ value: this.state.email }}
              error={this.state.emailRequerido} />
            <Upload nombre={"Subi tu CV"} handleUploadFile={this.handleUploadFile.bind(this)}
              reiniciado={this.state.reiniciado} />
            <Recaptcha
              ref={e => recaptchaInstance = e}
              sitekey={sitekey}
              size="compact"
              render="explicit"
              verifyCallback={() => this.verifyCallback()}
            />
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <div className={classes.modalBoton}>
              <Boton onClick={() => this.acceptPostulacion(area, posicion)}
                color="success"
                type="submit"
                disabled={!this.state.formularioHabilitado}
              > Aceptar
              </Boton>
            </div>
            <div className={`${classes.modalBoton} right`}><Boton onClick={() => this.handleClose()} color="danger"> Cancelar </Boton></div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Modal.defaultProps = {
  btnPosicion: "right"
};

Modal.propTypes = {
  btnPosicion: PropTypes.string,
};

export default Modal;