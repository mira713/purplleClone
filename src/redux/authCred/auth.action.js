import {GET_USER_FAILURE,GET_USER_SUCCESS,GET_USER_REQUEST,GET_SUCCESS_LOGIN,GET_FAIL_LOGIN} from "./auth.type";
import axios from "axios";
const baseUrl = 'https://average-wrap-eel.cyclic.app';


export const AllUsers =()=>(dispatch)=>{
  dispatch({type:GET_USER_REQUEST});
  fetch(`${baseUrl}/users`).then((res)=>{res.json(); console.log(res)})
}

export const PostUser = (cred) =>(dispatch) => {
  dispatch({type:GET_USER_REQUEST});
  fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        body: JSON.stringify(cred),
        headers: {
            'Content-type': 'application/json',
        }
    })
        .then(function (response) {
            response.json()
            localStorage.setItem('resp',response.status)
            dispatch({type:GET_USER_SUCCESS,payload:response})
        })
        // .then((res)=>console.log(res.status))
        // .then((res)=>dispatch({type:GET_USER_SUCCESS,payload:res}))
}

export const LoginUser = (cred) => (dispatch) => {
  try{
    axios
    .post(`${baseUrl}/users/login`, cred)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      console.log(res)
      if(res.data.token){
        dispatch({type:GET_SUCCESS_LOGIN,payload:res.data.token})
      }
      else{
        dispatch({type:GET_FAIL_LOGIN,payload:'none'})
      }
    })
  }
  catch(e){
    dispatch({type:GET_FAIL_LOGIN,payload:e.message})
  }
}


