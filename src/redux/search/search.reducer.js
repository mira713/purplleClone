import {PRODUCT_LOADS,PRODUCT_FAILS,PRODUCT_SEARCH} from './search.type';

const initialState={
    data : [],
    loading: false,
    error:false
 }

 export const SearchReducer=(state=initialState,{type, payload})=>{
    switch(type){
     default : {
         return state
     }
     case PRODUCT_SEARCH:{
         return {
             ...state,
             data : payload,
         }
     }
     case PRODUCT_FAILS:{
         return {
             ...state,
             data : [],
             error : true,
         }
     }
     case PRODUCT_LOADS : {
         return {
             ...state,
             data : [],
             loading : true,
         }
     }
    }
 }