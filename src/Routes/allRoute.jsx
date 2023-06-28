import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/home'
import Register from '../pages/register'
import Login from '../pages/login'
import Product from '../pages/allPages/product'
import Facemakeup from '../pages/allPages/facemakeup';
import Lipmakeup from '../pages/allPages/lipmakeup';
import Eyemakeup from '../pages/allPages/eyemakeup';
import Nailmakeup from '../pages/allPages/eyemakeup';
import Hairmakeup from '../pages/allPages/hair';
import Lakme from '../pages/allPages/lakme';
import Facecanada from '../pages/allPages/facecanada';
import Goodvibe from '../pages/allPages/goodvibe';
import Maybeline from "../pages/allPages/maybeline";
import Nybae from '../pages/allPages/nybrand';
import Purplle from '../pages/allPages/purplle';
import SingleProd from '../usableCompo/singleProd';
import OrderPage from '../pages/cart/orderPage';
import Payment from '../pages/payment/payment'

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
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/order/payment" element={<Payment/>}/>
        </Routes>
    </div>
  )
}

export default AllRoute