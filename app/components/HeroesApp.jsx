var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Dashboard = require('Dashboard');
var MyHeroes = require('MyHeroes');
var HeroDetails = require('HeroDetails');

var HeroesApp = React.createClass({
  render: function () {
      var {dispatch} = this.props;
    return (
      <div className="container">
        <h2>Tour of Heroes</h2>
          <button type="button" className="btn btn-default" onClick={()=>dispatch(actions.ShowDashboard())}>Dashboard</button>
          <button type="button" className="btn btn-default" onClick={()=>dispatch(actions.ShowAllHeroes())}>Heroes</button>
        <hr/>
        <Dashboard/>
          <MyHeroes/>
          <HeroDetails/>
      </div>
    )
  }
});

module.exports =  connect()(HeroesApp);