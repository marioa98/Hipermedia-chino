import {FETCH_USER} from '../actions/types'

export default function(state = null, action){

    console.log(action);

    switch(action.type){
        case FETCH_USER:
            return action.payload || false; //Si existe un valor, lo devolverá, de lo contrario devolverá falso
        default:
            return state;
    }
}