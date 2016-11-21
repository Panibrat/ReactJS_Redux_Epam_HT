var React = require('react');
var HeroName = require('HeroName');
var Hero = require('Hero');
var {connect} = require('react-redux');


var MyHeroes = React.createClass({
    
  render: function () {
      var { heroes, visibilityFilter, detailsHeroId, dispatch  } = this.props;
      var myHeroesClassName = ()=>{
          if(visibilityFilter !== 'SHOW_HEROES') {
              return 'hidden';
          }else{
              return "container col-xs-6";
          }
      };

      var RenderHeroes = ()=> {
          return heroes.map((hero)=>{
                  return (
                          <Hero name={hero.name} key={hero.id} {...hero}/>
                      );
              })
      };


    return (
        <div className= {myHeroesClassName()}>
          <h4>My Heroes</h4>
          <table className="table table-striped">
            <tbody>
                {RenderHeroes()}
            </tbody>
          </table>
          <HeroName/>
        </div>
    )
  }
});

module.exports =  connect(
    (state) => {
    return state;
}
)(MyHeroes);


