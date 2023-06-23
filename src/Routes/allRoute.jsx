import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/home'
import Register from '../pages/register'
import Login from '../pages/login'
import Product from '../pages/product'
import Facemakeup from '../allPages/facemakeup';
import Lipmakeup from '../allPages/lipmakeup';
import Eyemakeup from '../allPages/eyemakeup';
import Nailmakeup from '../allPages/eyemakeup';
import Hairmakeup from '../allPages/hair';
import Lakme from '../allPages/lakme';
import Facecanada from '../allPages/facecanada';
import Goodvibe from '../allPages/goodvibe';
import Maybeline from "../allPages/maybeline";
import Nybae from '../allPages/nybrand';
import Purplle from '../allPages/purplle';
import SingleProd from '../usableCompo/singleProd'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/facemakeup" element={<Facemakeup/>}/>                                                     
            <Route path="/lipmakeup" element={<Lipmakeup/>}/>
            <Route path="/eyecare" element={<Eyemakeup/>}/>
            <Route path="/nails" element={<Nailmakeup/>}/>
            <Route path='/lipcare' element={<Lipmakeup/>}/>
            <Route path='/hairstyling' element={<Hairmakeup/>}/>
            <Route path='/hairaccessories' element={<Hairmakeup/>}/>
            <Route path="/lakme" element={<Lakme/>}/>
            <Route path="/facecanada" element={<Facecanada/>}/>
            <Route path="/goodvibes" element={<Goodvibe/>}/>
            <Route path="/maybeline" element={<Maybeline/>}/>
            <Route path="/nybae" element={<Nybae/>}/>
            <Route path="/purplle" element={<Purplle/>}/>
            <Route path="/singleProd" element={<SingleProd/>}/>
        </Routes>
    </div>
  )
}

export default AllRoute