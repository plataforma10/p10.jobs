import React from 'react';
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
import GridItem from '../grid/gridItem';
import CustomInput from '../customInput';
import styles from "./styles";
import Upload from '../buttons/upload';
import axios from 'axios';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;   

    this.setState(x);
  }
  validarCampos(){
    const { nombre, apellido, email } = this.props;
    if(nombre.value == '' || nombre.value == undefined){      
      return false;
    }
    if(apellido.value == '' || nombre.value == undefined){      
      return false;
    }
    if(email.value == '' || nombre.value == undefined){
      return false;
    }    
    return true;
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
        err;
      });
    }   
  }  

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Boton
          color="rose"
          round
          onClick={() => this.handleClickOpen("modal")}>
          {this.props.nombre}
        </Boton>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("modal")}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}>
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose("modal")}>
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Completa el siguiente formulario</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                    labelText="Nombre"
                    id="nombre"
                    formControlProps={{
                      fullWidth: true
                    }}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                    labelText="Apellido"
                    id="apellido"
                    formControlProps={{
                        fullWidth: true                      
                    }}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                />
            </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Upload nombre={"CV"}/>
          </GridItem>
          </DialogContent>
          <DialogActions
            className={classes.modalFooter}>
            <Boton
              onClick={() => this.handleClose("modal")}
            >
              Cancelar
            </Boton>
            <Boton
              onClick={
                () => this.acceptPostulacion("modal")
              }
              color="success">
              Aceptar
            </Boton> 
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Modal);