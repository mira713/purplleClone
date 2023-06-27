import {
  CART_ADD_SUCCESS,
  CART_FUNC_ERROR,
  CART_FUNC_LOADING,
  CART_DELETE_SUCCESS,
  CART_UPDATED_SUCCESS,
  CART_GET_SUCCESS,
} from "./cart.type";

const initialState={
    data : [],
    loading: false,
    count: 0,
    error:false
 }
 
 export const CartReducer=(state=initialState,{type, payload})=>{
    switch(type){
     default : {
         return state
     }
     case CART_GET_SUCCESS:{
        console.log('reducer',payload)
         return {
             ...state,
             data : payload.da,
             count : payload.c
         }
     }
     case CART_FUNC_ERROR:{
         return {
             ...state,
             data : [],
             error : true,
         }
     }
     case  CART_FUNC_LOADING : {
         return {
             ...state,
             data : [],
             loading : true,
         }
     }

     case CART_ADD_SUCCESS : {
        console.log("reducer",payload)
        return {
            ...state,
            data : [...state.data,payload],
            error: false,
            loading : false,
        }
     }

     case CART_UPDATED_SUCCESS : {
        let filtered = state.data.map((el)=>{
            if(el._id===payload._id){
                return payload;
            }
            return el;
        })
        return {
            ...state,
            data : filtered,
        }
     }

     case CART_DELETE_SUCCESS :{
        let filtered = state.data.map((el)=>{
            if(el._id===payload._id){
                return
            }
            return el;
        })
        return {
            ...state,
            data : filtered,
        }
     }
    }
 }