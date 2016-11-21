var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var HeroName = React.createClass({
  render: function () {
      var { heroes, visibilityFilter, detailsHeroId, dispatch  } = this.props;
      var hero = heroes.find(hero =>
          hero.id === detailsHeroId
      );

    if (detailsHeroId>0)  {
        return (
            <div className="container col-xs-12">
                <h5>{hero.name} is my hero!</h5>
                <button type="button" className="btn btn-default" onClick= {()=>
                dispatch(actions.ShowHeroById(hero.id))
                }>Details</button>
            </div>
        );
    }else{
        return (
            <div className="hiden">
            </div>
        );
    }

  }
});


module.exports =  connect(
    (state) => {
        return state;
    }
)(HeroName);