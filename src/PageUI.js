import React, { Component } from 'react';
import Header from './Header';
import Routes from './Routes/Routes';
import { withStyles } from '@material-ui/styles';
import styles from './Styles/PageUIStyles';

//all content is placed into the div with background image (images are in public folder)
class PageUI extends Component {
  render() {
    const { content, classes } = this.props;
    return (
      <div style={{ backgroundImage:`url("../assets/backgrounds/${content.pages[0].blocks[0].background}")`, overflow: "hidden" }}>
        <div className={classes.root}>
          <Header content={{content}} />
          <Routes />
        </div>
      </div> 
    );
  }
}

export default withStyles(styles)(PageUI); 
