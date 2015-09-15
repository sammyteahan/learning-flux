var React = require('react');
var Catalog = require('../components/catalog');
var Cart = require('../components/cart');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Catalog</h1>
        <Catalog />
        <h1>Cart</h1>
        <Cart />
      </div>
    )
  }
});

module.exports = App;
