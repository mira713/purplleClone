import { GetLocal, SetLocal } from '../../Utils/sessionStorage';
import * as types from './auth.type'
//  GetLocal('isAuth') || null,
const initialState = {
    isAuth: "",
    token: '',
    isAuthLoading: false,
    isAuthError: false,
    data:{},
    user:{}
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_USER_REQUEST: {
            return {
                ...state, isLoading: true,
            }
        }
        case types.GET_USER_SUCCESS: {
            //SetLocal('isAuth', true)
            return {
                ...state, isLoading: false, data : payload, isAuth: true
            }
        }
        case types.GET_USER_FAILURE: {
            SetLocal('isAuth', false)
            return {
                ...state, isLoading: false, isError: true, token: '', isAuth: false
            }
        }
        case types.GET_SUCCESS_LOGIN:{
            SetLocal('isAuth', true)
            console.log(payload.user,'reducer')
            sessionStorage.setItem('logged_user',JSON.stringify(payload.user))
            return {
                ...state, isLoading:false,isError : false, token : payload , isAuth: true,user: payload.user
            }
        }
        case types.GET_FAIL_LOGIN:{
            SetLocal('isAuth', false)
            return {
                ...state, isLoading:true, isError: true, token : '' , isAuth : false
            }
        }
        default: return state
    }
}