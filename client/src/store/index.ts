import {combineReducers, createStore} from "redux";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {reducer_pcs} from "./reducer_pcs";
import {reducer_price} from "./reducer_price";
import {reducer_basket} from "./reducer_basket";
import {reducer_basket_fullness} from "./reducer_basket_fullness";



const rootReducer=combineReducers({
    pcs: reducer_pcs,
    price: reducer_price,
    pizza:reducer_basket,
    direct:reducer_basket_fullness
})

const persistConfig = {
    key: 'root',
    storage,
}
const persistReducer=persistReducer(persistConfig,rootReducer)


export const store=createStore(rootReducer)

