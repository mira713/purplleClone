import {
    CART_ADD_SUCCESS,
    CART_FUNC_ERROR,
    CART_FUNC_LOADING,
    CART_DELETE_SUCCESS,
    CART_UPDATED_SUCCESS,
    CART_GET_SUCCESS,
} from "./cart.type";
import axios from "axios";
const baseUrl = 'https://average-wrap-eel.cyclic.app';


export const getCart = (page=1) => async (dispatch) => {
    let token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    };
    dispatch({ type: CART_FUNC_LOADING });
    try{
        console.log('i am inside try',page)
        let res =await axios.get(`${baseUrl}/cart?page=${page}`,config);
        console.log('await is done')
        let da = res.data.data;
        let c = res.data.count
        console.log('action: ',res.data)
        dispatch({type:CART_GET_SUCCESS,payload:{da,c}})
    }catch(e){
        dispatch({type:CART_FUNC_ERROR,payload:e.message})
    }
}

export const addCart = (data) => (dispatch) => {
    let {href,img,offers,name,src,price,mrl5,off2,rating,ratingCount,tkPk} = data;
    let quantity = data.quatity||1
    let obj = {href, img,offers,name,src,price,mrl5,off2,rating,ratingCount,tkPk,quantity:quantity||1}
    dispatch({ type: CART_FUNC_LOADING });
    obj = [obj]

    return axios.post(`${baseUrl}/cart/add`,obj,{headers:{tkn:localStorage.getItem("token")}})
    .then(r=>dispatch({type: CART_ADD_SUCCESS, payload:r.data}))
}

export const updateCart = (product) => async (dispatch) => {
    let {productId, quantity} = product
    let token = localStorage.getItem('token');
    dispatch({ type: CART_FUNC_LOADING });
    fetch(`${baseUrl}/cart/${productId}`, {
        method: 'PATCH',
        body: JSON.stringify({quantity}),
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    })
        .then(function (response) {
            response.json()
            dispatch({ type: CART_UPDATED_SUCCESS, payload: response })
        })
        .catch((err) => dispatch({ type: CART_FUNC_ERROR, payload: err.message }))
}

export const deleteCart = (id) => async (dispatch) => {
    let token = localStorage.getItem('token');
    dispatch({ type: CART_FUNC_LOADING });
    fetch(`${baseUrl}/cart/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    })
        .then((res) => {
            res.json()
            dispatch({ type: CART_DELETE_SUCCESS, payload: res })
        })

        .catch((err) => dispatch({ type: CART_FUNC_ERROR, payload: err.message }))
}