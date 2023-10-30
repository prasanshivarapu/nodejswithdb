const redux = require('redux');
const reduxLogger = require('redux-logger')
const logger =  reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';
const BUY_CAKE1 = 'BUY_CAKE1';
function buyCake() {
    return {
        type: BUY_CAKE
    };
}
function buyCake1() {
  return {
      type: BUY_CAKE1
  };
}
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
                // numOfIceCreams:state.numOfIceCreams+1
            };
         case BUY_CAKE1:{
          return{
            ...state,
            
            numOfIceCreams:state.numOfIceCreams+1
          }
         }   
        default:
            return state;
    }
};

const store = createStore(reducer,applyMiddleware(logger));

console.log("Initial State: ", store.getState());

store.subscribe(() => 
{});

store.dispatch(buyCake()); 
store.dispatch(buyCake())
store.dispatch(buyCake()); 
store.dispatch(buyCake1())
store.dispatch(buyCake1()); 


