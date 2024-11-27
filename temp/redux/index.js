const redux = require("redux")

const initialState = {
	numberOfCakes: 10,
}

const CAKE_ORDER = "CAKE_ORDER"
const ICE_ORDER = "ICE_ORDER"

function orderCake(payload=-1) {
	return {
		type: CAKE_ORDER,
		payload,
	}
}
function orderIce(payload=1){
	return {
		type: ICE_ORDER,
		payload,
	}
}

function reducer(state = initialState, action){
	switch(action.type){
		case CAKE_ORDER:
			return {
				...state,
				numberOfCakes: state.numberOfCakes + action.payload
			}
		default:
			return state
	}
}

// store
// hold states
const createStore = redux.createStore
const store = createStore(reducer)

// get states
console.log(store.getState())

// listener
const unsubscribe = store.subscribe(()=>{
	console.log("listener: ", store.getState())
})

// dispatch
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake(10))

// unsubscribe
unsubscribe()
