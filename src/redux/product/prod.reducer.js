import {PRODUCT_FAIL,PRODUCT_LOAD,PRODUCT_GET} from './prod.type';

const initialState={
   data : [],
   loading: false,
   error:false
}

export const ProductReducer=(state=initialState,{type, payload})=>{
   switch(type){
    default : {
        return state
    }
    case PRODUCT_GET:{
        return {
            ...state,
            data : payload,
        }
    }
    case PRODUCT_FAIL:{
        return {
            ...state,
            data : [],
            error : true,
        }
    }
    case PRODUCT_LOAD : {
        return {
            ...state,
            data : [],
            loading : true,
        }
    }
   }
}