import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './pay.css'
import { useState } from "react";
import PaymentNav from './paymentNav'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCart } from '../../redux/cart/cart.action';
//import { postOrder } from '../../Redux/Order/action';
import { Skeleton, Stack,Flex } from '@chakra-ui/react'
import { useEffect } from 'react';
function Payment() {
    const dispatch = useDispatch()
    const { isLoading, isError, cart, id } = useSelector((store) => store.CartReducer);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [mob, setMob] = useState('')
    const [ad1, setAdd1] = useState('');
    const [ad2, setAdd2] = useState('');
    const [pin, setPin] = useState('');
    const [city, setCity] = useState('')
    const [state, setState] = useState('');

    useEffect(() => {
        dispatch(getCart())
    }, [])

    const navigate = useNavigate()
    const payNavigate = () => {


        //dispatch(postOrder(cart))
        //dispatch(deleteCart(id))

        navigate("/payment")
    }

    if (isLoading) {
        return (<Stack w={"90%"} m="auto" mt={"50px"}>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>)
    }

    return (


        <>
            <PaymentNav />
            <div id="payment-container">


                <div id="addres">

                    <h1 id='ships'>Shipping Address</h1>
                    <div id="shipping-ad">
                        <input type="text" value={name} onChange={event => setName(event.target.value)} name="First Name" placeholder='First Name *' className='input' />
                        <input type="text" name="Last Name*" placeholder="Last Name" className='input' />
                        <div id="radio">
                            <label>Gender</label>
                            <input type="radio" id="Male" name="Male" value="Male" />
                            <label for="Male">Male</label>
                            <input type="radio" id="Female" name="Male" value="Female" />
                            <label for="Female">Female</label>
                        </div>
                        <input className='input' value={mob} onChange={event => setMob(event.target.value)} type="number" name="number" placeholder='Number *' />
                        <input className='input' value={email} onChange={event => setEmail(event.target.value)} type="email" name="Email" placeholder='Email *' />
                        <hr />
                        <input className='input' type="text" name="" value={ad1} onChange={event => setAdd1(event.target.value)} placeholder='Addresh Line 1' />
                        <input className='input' type="text" name="" value={ad2} onChange={event => setAdd2(event.target.value)} placeholder='Addresh Line 2' />
                        <br />
                        <input className='input' type="text" name="" value={pin} onChange={event => setPin(event.target.value)} placeholder='Zip/Postal Code' />
                        <input className='input' type="text" name="" value={city} onChange={event => setCity(event.target.value)} placeholder='City/District' />
                        <br />
                        <input className='input' type="text" name="" value="India" placeholder='Address Line 1' />
                        <input className='input' type="text" name="" value={state} onChange={event => setState(event.target.value)}  placeholder='State' />
                        <br />
                        <button id='shiping' onClick={payNavigate} disabled={!email || !name || name.length < 3 || !mob || mob.length < 10}>checkout</ button>
                    </div>
                    <div>or</div>
                    <button id="shiping">Cancel</button>
                </div>
            </div>
        </>
    )
}

export default Payment