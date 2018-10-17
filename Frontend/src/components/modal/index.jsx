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
import CustomInput from '../customInput';
import styles from "./styles";
import Upload from '../buttons/upload';
import axios from 'axios';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

@withStyles(styles)
class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  handleClickOpen() {
    this.setState({
      modal: true
    });
  }

  handleClose() {
    this.setState({
      modal: false
    });
  }

  acceptPostulacion(modal){    
    const { nombre, apellido, email } = this.props;        
    if(this.validarCampos()){
      axios.post(`${process.env.HOST_BACK}/jira/${nombre.value}/${apellido.value}/${email.value}/agregarArchivoAca`)
      .then((res) => {
        if(res === '201'){
          this.handleClose(modal);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }   
  }

  validarCampos(){
    const { nombre, apellido, email } = this.props;
    if(!nombre.value){      
      return false;
    }
    if(!apellido.value){      
      return false;
    }
    if(!email.value){
      return false;
    }    
    return true;
  }

  render(){
    const { classes, btnPosicion } = this.props;
    return (
      <div className={`${classes.container} ${classes[btnPosicion]}`}>
        <Boton color="rose" onClick={() =>this.handleClickOpen()}>
          {this.props.nombre}
        </Boton>
        <Dialog classes={{ root: classes.center, paper: classes.modal }} open={this.state.modal} TransitionComponent={Transition} keepMounted
          onClose={() =>this.handleClose()} aria-labelledby="modal-slide-title" aria-describedby="modal-slide-description">
          <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
            <IconButton className={classes.modalCloseButton} key="close" aria-label="Close"
              color="inherit" onClick={() =>this.handleClose()}>
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Completa el siguiente formulario</h4>
          </DialogTitle>
          <DialogContent id="modal-slide-description" className={classes.modalBody}>
            <CustomInput labelText="Nombre" id="nombre" formProps={{ fullWidth: true }}/>
            <CustomInput labelText="Apellido" id="apellido" formProps={{ fullWidth: true }}/>
            <CustomInput labelText="Email" id="email" formProps={{ fullWidth: true }}/>
            <Upload nombre={"Subi tu CV"}/>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <div className={classes.modalBoton}><Boton onClick={() => this.handleClose()} color="danger"> Cancelar </Boton></div>
            <div className={`${classes.modalBoton} right`}><Boton onClick={() => this.acceptPostulacion() } color="success"> Aceptar </Boton></div>     
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