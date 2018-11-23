import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Boton from './boton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

@withStyles(styles)
class Upload extends PureComponent {
  onInputChange = (e) => {
    this.props.handleUploadFile(e);
    var fileName = e.target.value.split( '\\' ).pop();
    document.getElementById("file-seleccionado").innerText = fileName;
  }

  render(){
    const { classes, nombre , reiniciado} = this.props;
    if(reiniciado){
      document.getElementById("file-seleccionado").innerText = "Selecciona un archivo";
      document.getElementById("contained-button-file").value = null;
    }
    return(
      <div>
        <input onChange={this.onInputChange} accept="application/msword, application/vnd.ms-excel,
                text/plain, application/pdf" className={classes.input} id="contained-button-file" type="file" />
        <label htmlFor="contained-button-file">
          <Boton variant="contained" component="span" className={classes.button} color='info' size='sm'>
            {nombre}<CloudUploadIcon className={classes.rightIcon} />
          </Boton>
          <span id="file-seleccionado">Selecciona un archivo</span>
        </label>
      </div>
    )
  }
}

export default Upload;
