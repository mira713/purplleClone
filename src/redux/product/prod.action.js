import {PRODUCT_GET,PRODUCT_LOAD,PRODUCT_FAIL,PRODUCT_SEARCH} from './prod.type';
import axios from 'axios';

export const getData = (page) => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
       let res = await axios.get(`https://average-wrap-eel.cyclic.app/product/get?page=${page}`);
       res = res.data;
       dispatch({type:PRODUCT_GET,payload:res.data})
    }catch(e){
        console.log(e.message)
        dispatch({type:PRODUCT_FAIL})
    }
}

export const facemakeup = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        console.log(res.data)
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('makeup')||l.includes('primer')){
                return el
            }
        })
        console.log('face',filtered)
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}

export const lipmakeup = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('lip')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}

export const eyemakeup = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('eye')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}

export const nailmakeup = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('nail')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}

export const hairmakeup = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('ha')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}
export const lakme = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('lakme')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}
export const facecanada = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('faces canada')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}
export const goodvibe = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('good')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}
export const maybeline = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('maybelline')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}
export const nybae = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('ny bae')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}
export const purplle = () => async(dispatch)=>{
    dispatch({type:PRODUCT_LOAD})
    try{
        let res = await axios.get('https://average-wrap-eel.cyclic.app/product');
        res = res.data;
        let filtered = res.filter((el)=>{
            let l = el.name.toLowerCase();
            if(l.includes('purplle')){
                return el
            }
        })
        dispatch({type:PRODUCT_GET,payload:filtered})
    }catch(e){
        dispatch({type:PRODUCT_FAIL})
    }
}