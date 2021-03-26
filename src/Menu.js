import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './Styles/MenuStyles';

//using material UI NavLink to show which link is currently active
class Menu extends Component {
  render() {
    const { menuItems } = this.props.menuItems;
    const { classes } = this.props;
    return (
      <div className="Menu">
        <nav className={classes.root}>
            <NavLink 
              exact
              activeClassName={classes.MenuItemActive}
              className={classes.MenuItem}
              to="/industries">{menuItems.content.pages[0].title}</NavLink>
            <NavLink 
              exact
              activeClassName={classes.MenuItemActive}
              className={classes.MenuItem}
              to="/services">{menuItems.content.pages[1].title}</NavLink>
            <NavLink 
              exact
              activeClassName={classes.MenuItemActive}
              className={classes.MenuItem}
              to="/about-us">{menuItems.content.pages[2].title}</NavLink>
        </nav> 
      </div>
    );
  }
}

export default withStyles(styles)(Menu); 