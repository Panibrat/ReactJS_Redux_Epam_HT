var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var HeroDetails = React.createClass({
    render: function () {
        var {heroes, visibilityFilter, detailsHeroId, dispatch} = this.props;

        if(detailsHeroId <1){
            return (
                <div className="hidden"></div>
            )
        }
        var tmpName = heroes.find(hero =>
            hero.id === detailsHeroId
        );
        var heroDetailsClassName = ()=>{
            if(visibilityFilter !== 'SHOW_HERO_DETAILS') {
                return 'hidden';
            }else{
                return "container col-xs-8";
            }
        };
        return (
            <div className={heroDetailsClassName()}>
                <h4>{tmpName.name} details!</h4>
                <p>id: {detailsHeroId}</p>
                <span>name</span>
                <input className="form-control" type="text" ref="heroName" value = {tmpName.name} onChange={() => {
                    var heroName = this.refs.heroName.value;
                    dispatch(actions.changeHeroName(detailsHeroId ,heroName ));
                }} />
                <button type="button" className="btn btn-default" onClick={()=>{
                    dispatch(actions.ShowDashboard());
                }}
                >Back</button>
            </div>
        )
    }
});

module.exports = connect(
    (state) => {
        return state;
    }
)(HeroDetails);