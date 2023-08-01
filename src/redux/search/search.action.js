import {PRODUCT_LOADS,PRODUCT_FAILS,PRODUCT_SEARCH} from './search.type';
import axios from 'axios';

export const search = (query) => async(dispatch) => {
    dispatch({type:PRODUCT_LOADS})
    try{
        let res = await axios.get(`https://exuberant-bass-wrap.cyclic.cloud/search/item/${query}`);
        res = res.data;
        dispatch({type:PRODUCT_SEARCH,payload:res})
    }catch(e){
        dispatch({type:PRODUCT_FAILS})
    }
}