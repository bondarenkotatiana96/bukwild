import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './Styles/ContactButtonStyles';

class ContactButton extends Component {
  render() {
    const { classes } = this.props;
    return (
        <button className={classes.root}>Contact Us</button>
    );
  }
}

export default withStyles(styles)(ContactButton);