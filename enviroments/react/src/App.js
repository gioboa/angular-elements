import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.ngElement = this.refs.elem;
    // we need to bind the event listener this way, since we can't get the custom event past react's synthetic event system
    // more on this at: https://github.com/facebook/react/issues/7901
    this.ngElement.addEventListener('loadingEvent', data => {
      console.log(data.detail);
    });
  }

  render() {
    return (
      <div className="App">
        <loading-widget ref="elem" title="Loading..." />        
      </div>
    );
  }
}

export default App;
