var React = require('react');
var AppStore = require('../stores/appStore');
var AddToCart = require('./addToCart');


/**
* Setup initial state
*/
function getCatalog() {
  return {items: AppStore.getCatalog()}
}

var Catalog = React.createClass({
  getInitialState: function() {
    return getCatalog();
  },
  render: function() {
    var items = this.state.items.map(function (item) {
      return (
        <tr key={item.id}>
          <td>{ item.title }</td>
          <td>${ item.cost }</td>
          <td><AddToCart item={item} /></td>
        </tr>
      );
    });
    return (
      <table className="table table-hover">
        { items }
      </table>
    )
  }
});

module.exports = Catalog;