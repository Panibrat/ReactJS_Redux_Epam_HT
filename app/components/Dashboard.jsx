var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Dashboard = React.createClass({
  render: function () {
      var {heroes, visibilityFilter, dispatch, topHeroes} = this.props;
      var dashboardClassName = ()=>{
          if(visibilityFilter !== 'SHOW_DASHBOARD') {
              return 'hidden';
          }else{
              return "container";
          }
      };
    return (
      <div className={dashboardClassName()}>
        <h4>Top Heroes</h4>
          <button type="button" onClick={() => {
            dispatch(actions.ShowHeroById(11))}}
            className="btn btn-primary btn-lg">{heroes[0].name}
          </button>
          <button type="button" onClick={() => {
            dispatch(actions.ShowHeroById(12))}}
            className="btn btn-primary btn-lg">{heroes[1].name}
          </button>
          <button type="button" onClick={() => {
            dispatch(actions.ShowHeroById(13))}}
            className="btn btn-primary btn-lg">{heroes[2].name}
          </button>
          <button type="button" onClick={() => {
            dispatch(actions.ShowHeroById(14))}}
            className="btn btn-primary btn-lg">{heroes[3].name}
          </button>
      </div>
    )
  }
});

module.exports = connect(
    (state) => {
        return state;
    }
)(Dashboard);
