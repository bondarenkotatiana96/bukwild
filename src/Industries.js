import React, { Component } from 'react';
import content from './content.json';
import { withStyles } from '@material-ui/styles';
import styles from './Styles/PageContentStyles';

class Industries extends Component {
    constructor(props) {
        super(props);
        this.state = {content};
      }
  render() {
    const { classes } = this.props;
    return (
      <div>
          <div className={classes.root}>
            <h1 className={classes.MainPageHeading}>{content.pages[0].blocks[0].headline}</h1>
            <p className={classes.MainPageText}>{content.pages[0].blocks[0].subhead}</p>
          </div>
          <div className={classes.CtaBox}>
            <h2 className={classes.CtaText}>{content.pages[0].blocks[0].cta}</h2>
            <button className={classes.CtaBtn}>Let's talk. <span>&rarr;</span></button>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(Industries); 