import React, { Component } from 'react';
import { SpinLoader } from 'react-css-loaders';
import content from './content.json'; //Texts for the pages
import PageUI from './PageUI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {content, isLoading: true};
  }

  //shows spin loader after rendering all components
  componentDidMount() {
      this.setState({isLoading: false});
  }

  render() {
    return (
    this.state.isLoading ? <SpinLoader color="#ffc004" /> : <PageUI content={this.state.content} />
    );
  }
}

export default App;
