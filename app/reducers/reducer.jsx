var reducer  = function (state = initialState,action) {
  switch (action.type) {

    case 'SHOW_DASHBOARD':
      return {
        ...state,
        visibilityFilter: 'SHOW_DASHBOARD'
      };
    case 'SHOW_HEROES':
      return {
        ...state,
        visibilityFilter: 'SHOW_HEROES'
      };
    case 'SHOW_HERO_DETAILS':
      return {
        ...state,
        visibilityFilter: 'SHOW_HERO_DETAILS',
        detailsHeroId: action.id,
      };
      case 'SHOW_HERO_BOTTOM_DETAILS':
          return {
              ...state,
              detailsHeroId: action.id,
          };

      case 'CHANGE_HERO_NAME':
      return {...state,
          heroes: state.heroes.map(hero => {
              if(hero.id == action.id){
                  hero.name = action.newHeroName;
              }
              return hero;
          })
      };


    default:
      return state;
  };
  return state;
}
module.exports = reducer;