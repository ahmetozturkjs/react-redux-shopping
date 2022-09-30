import ProducstReducer from "./reducers/ProductsReducer";
import {createStore,combineReducers} from "redux"

const rootReducer=combineReducers({
    productsState:ProducstReducer
})

const store=createStore(rootReducer);

export default store;