import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'



var Hello = React.createClass({
  myClick: function () {
      alert("Hello World!");
  },
  render: function() {
      return <button onClick={this.myClick}>
                 Click Me
              </button>;
  }
});

React.render(<Hello />, document.getElementById('container'));

export default Hello