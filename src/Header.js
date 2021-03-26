//logo (abc), menu and contact button

import React, { Component } from 'react';
import Menu from "./Menu";
import ContactButton from "./ContactButton";
import { withStyles } from '@material-ui/styles';
import Logo from './Logo.js'; 
import styles from './Styles/HeaderStyles';

//separate boxes(div) for menu + logo and for contact button
class Header extends Component {
  render() {
    const menuItems = this.props.content;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <div className={classes.HeaderMenu}> 
        <Logo />
        <Menu menuItems={{menuItems}} />
      </div>
        <ContactButton />
      </div> 
    );
  }
}

export default withStyles(styles)(Header); 