var React = require('react');
var AppActions = require('../actions/appActions');

var RemoveFromCart = React.createClass({
  handler: function() {
    AppActions.removeItem(this.props.index);
  },
  render: function() {
    return <button onClick={this.handler}>X</button>
  }
});

module.exports = RemoveFromCart;
