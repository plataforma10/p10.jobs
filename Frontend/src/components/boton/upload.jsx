import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Upload(props) {
  const { classes } = props;
  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          {props.nombre}          
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </label>
    </div>
  );
}

Upload.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Upload);
