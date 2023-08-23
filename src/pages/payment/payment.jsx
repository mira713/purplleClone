import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './pay.css'
import { useState } from "react";
import PaymentNav from './paymentNav'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCart , getCart } from '../../redux/cart/cart.action';
import { Skeleton, Stack, useDisclosure, Modal, ModalFooter, ModalBody, Button, Text, ModalContent, ModalHeader, ModalCloseButton, ModalOverlay, ModalCloseButto } from '@chakra-ui/react'
import { useEffect } from 'react';

function Payment() {
    const dispatch = useDispatch()
    let [user, setUser]= useState(JSON.parse(sessionStorage.getItem("logged_user")))
    let [f_name, setfirstName] = useState(user.name?.split(' ')[0])
    let [l_name, setlastName] = useState(user.name?.split(' ')[1])
    const [email, setEmail] = useState(user.email)
    const [mob, setMob] = useState(user.number)
    const [ad1, setAdd1] = useState('');
    const [ad2, setAdd2] = useState('');
    const [pin, setPin] = useState('');
    const [city, setCity] = useState('')
    const [state, setState] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCart())
    }, [])
    const payNavigate = () => {
        navigate("/payment")
    }

    let closed = () => {
        onClose();
        dispatch(deleteAllCart(user._id)).then((res)=>{
            return(
                navigate('/'),
                window.location.reload()
            )
        })
    }

    let onOpenPop=()=>{
        dispatch(deleteAllCart(user._id)).then((res)=>onOpen())
    }
    return (


        <>
            <PaymentNav />
            <div id="payment-container">


                <div id="addres">

                    <h1 id='ships'>Shipping Address</h1>
                    <div id="shipping-ad">
                        <input type="text" value={f_name} name="First Name*" placeholder='First Name' className='input' onChange={event => setfirstName(event.target.value)} />
                        <input type="text" value={l_name} name="Last Name*" placeholder="Last Name" className='input' onChange={event => setlastName(event.target.value)} />
                        <div id="radio">
                            <label>Gender</label>
                            <input type="radio" id="Male" name="Male" value="Male" />
                            <label for="Male">Male</label>
                            <input type="radio" id="Female" name="Male" value="Female" />
                            <label for="Female">Female</label>
                        </div>
                        <input className='input' value={mob} type="number" name="number" placeholder="mobile number" onChange={event => setMob(event.target.value)} />
                        <input className='input' value={email} onChange={event => setEmail(event.target.value)} type="email" name="Email" placeholder='Email *' />
                        <hr />
                        <input className='input' type="text" name="" value={ad1} onChange={event => setAdd1(event.target.value)} placeholder='Addresh Line 1' />
                        <input className='input' type="text" name="" value={ad2} onChange={event => setAdd2(event.target.value)} placeholder='Addresh Line 2' />
                        <br />
                        <input className='input' type="text" name="" value={pin} onChange={event => setPin(event.target.value)} placeholder='Zip/Postal Code' />
                        <input className='input' type="text" name="" value={city} onChange={event => setCity(event.target.value)} placeholder='City/District' />
                        <br />
                        <input className='input' type="text" name="" value="India" placeholder='Address Line 1' />
                        <input className='input' type="text" name="" value={state} onChange={event => setState(event.target.value)} placeholder='State' />
                        <br />
                        <button id='shiping' onClick={onOpenPop} disabled={!email || !f_name || !mob || mob.length < 10}>checkout</ button>
                    </div>
                    <div>or</div>
                    <button id="shiping"onClick={()=>navigate('/order')}>Cancel</button>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>payment successful!!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <img src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif" alt="mitali"/>
                        <Text>Thank You For Shopping!!</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={closed}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default Payment