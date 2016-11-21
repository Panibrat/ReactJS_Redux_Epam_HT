var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Hero = React.createClass({
  render: function () {
      var {id, name, dispatch} = this.props;
      //actions.testLog();
    return (
        <tr className="hero" onClick={() => {
          //dispatch(actions.ShowHeroById(id));
          dispatch(actions.ChoiseHeroById(id));
          console.log("id====",id)
        }}>
            <td>{id}</td>
            <td>{name}</td>
        </tr>
    )
  }
});

module.exports = connect()(Hero);
