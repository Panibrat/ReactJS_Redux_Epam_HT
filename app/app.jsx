var React = require('react');
var redux = require('redux');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var actions = require('actions');
var reducer = require('reducer');
var initialState = require('initialState');
var HeroesApp = require('HeroesApp');


const {createStore} = redux;
var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});

var state = store.getState();
//store.dispatch(actions.ShowDashboard());
//store.dispatch(actions.ShowHeroById(14));
//store.dispatch(actions.changeHeroName(14, "Sasha"));
store.dispatch(actions.ChoiseHeroById(0));

console.log('New state', state);

ReactDOM.render(
  <Provider store={store}>
    <HeroesApp/>
  </Provider>,
  document.getElementById('app')
);
