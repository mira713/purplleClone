import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import {
  Image, Box, Text, Button, useDisclosure, Drawer, PopoverContent, PopoverHeader, PopoverBody,
  DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, Input, PopoverTrigger, Popover, Modal,
  Flex, useToast
} from '@chakra-ui/react';
import '../pages/home.css';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BsEmojiSmile, BsCartPlus } from 'react-icons/bs';
import Dropdown from './dropdown'
import { useSelector, useDispatch } from "react-redux";
import { getCart } from '../redux/cart/cart.action';
import { search } from '../redux/search/search.action';

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  let product = useSelector(store => store.SearchReducer.data) || [];
  let countCart = useSelector(store=>store.CartReducer.count);
  let [auth, setAuth] = useState(localStorage.getItem('isAuth')?true:false)
  let loading = useSelector(store => store.SearchReducer.loading);
  let [text, setText] = useState('');
  let dispatch = useDispatch()
  let payload = useDisclosure();
  let isOpen1 = payload.isOpen;
  let onOpen1 = payload.onOpen;
  let onClose1 = payload.onClose;
  let navigate = useNavigate();
  let toast = useToast()
  // const [searchParams, setSearchParams] = useSearchParams();  


  const btnRef = React.useRef()
  useEffect(() => {
    let el = document.querySelector('#elem');
    isOpen ? el.className = "stick" : el.className = "sticky";
    dispatch(search(text))
    dispatch(getCart())
  }, [isOpen, text])

  let register = () => {
    onOpen1();
  }

  // let query = searchParams.get("q")
  // ? searchParams.get("q").toLocaleLowerCase()
  // : "";


  let singlePage = (item) => {
    onClose()
    localStorage.setItem("product", JSON.stringify(item))
    navigate('/singleProd')
  }
  let LogOut = () => {
    let isAuth= localStorage.getItem('isAuth');
    if(isAuth){
      localStorage.removeItem('token')
      localStorage.removeItem('isAuth')
      
      toast({
        title: 'logout successfully !',
        description: "Go to Login ",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }else{
      toast({
        title: 'already logout!',
        description: "Go to Login ",
        status: 'info',
        duration: 9000,
        isClosable: true,
      })
    }
    window.location.reload();
  }
  return (
    <div id="elem" className='sticky'>
      <Box className="topNav">
        <Box className="topNavLeft">
          <Image src="https://media6.ppl-media.com/mediafiles/ecomm/home/1543587824_logo.png" alt="logo" h='auto' w='10%'/>
          <Text fontSize={['10px','12px','14px','16px']}>FLAT Rs. 100 OFF on Your first order!</Text>
          <Text fontSize={['10px','12px','14px','16px']}>Use Code: APPFIRST</Text>
        </Box>
        <Box className="topNavRight" p="8px" w="auto">
          <Button fontSize={['10px','12px','14px','16px']}>DOWNLOAD APP</Button>
          <Button>
            <RxCross2 size="20" />
          </Button>
        </Box>
      </Box>
      <Box>
        <Box className='navMid'>
          <Box className='search'>
            <Box width="100%" borderBottom="2px solid red" color="grey" onClick={onOpen}>Search product</Box>
            <Box borderBottom="2px solid red" >
              {<AiOutlineSearch size="25" />}
            </Box>
          </Box>
          <Box>
            <Image src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" alt="purplle"/>
          </Box>
          <Box className='navImoji' mr="2%">
            <Box mr="2%">
              <AiOutlineHeart size="30" />
            </Box>
            <Box mr="2%">
              <Popover>
                <PopoverTrigger>
                  <BsEmojiSmile size='30' />
                </PopoverTrigger>
                <PopoverContent backgroundColor={"white"} w={['30vw', '27vw', '24vw', '22vw', "20vw"]}
                  position="absolute"
                  top={['18vh', '17vh', '10vh', '22vh', '20vh']}
                  left={['71vw', '72vw', '75vw', '72vw', '75vw']}
                  p='3vh'
                  fontSize={'13px'}>
                  <PopoverHeader fontWeight={'bold'} backgroundColor={'purple'} color="white" p="2vh"onClick={()=>navigate('/login')}>Log in</PopoverHeader>
                  <PopoverBody>
                    <Text fontWeight="bold" mt='1' _hover={{ color: "purple" }}onClick={()=>navigate('/register')}>New Customer?<span style={{ color: "red" }}> start here</span></Text>
                    <Text fontWeight="bold" mt='1' _hover={{ color: "purple" }}>Your account</Text>
                    <Text fontWeight="bold" mt='1' _hover={{ color: "purple" }} onClick={()=>navigate('/wishlist')}>Your wishlist</Text>
                    <Text fontWeight="bold" mt='1' _hover={{ color: "purple" }} onClick={()=> navigate('/order')}>Your orders</Text>
                    <Text fontWeight="bold" mt='1' _hover={{ color: "purple" }} onClick={() => LogOut()}>Logout</Text>
                    <Text mt='1' color="red" onClick={()=>navigate('/register')}>Register</Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
            <Box mr="2%" onClick={() => navigate('/order')} position="relative">
              <BsCartPlus size="30" />
              <div style={{height:'25px', width:"25px", borderRadius:"50%", backgroundColor:"red",color:"white",position:"absolute", top:"-13px", left:"13px",visibility:countCart==0&&auth==true?"hidden":""}}>{countCart}</div>
            </Box>
          </Box>
        </Box>
        <hr />
        <Box bgColor={'white'}>
          <Dropdown />
        </Box>
        <hr />
      </Box>
      {/* drawer */}
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="draw">
          <DrawerCloseButton />
          <Box w="80%" p="5%" margin="auto" >
            <DrawerHeader>Search for Product and Brand</DrawerHeader>
            <br />
            <DrawerBody >
              <Box w='100%' borderBottom={"2px solid red"} display={'flex'}>
                <Input placeholder='Type here...' w='95%' h='6vh' className="inpt" onChange={(e) => setText(e.target.value)} />
                <Box w='5%'>{<AiOutlineSearch size="25" />}</Box>
              </Box>
              <Box className="options" h={product[1] ? "50vh" : "0px"} overflow={product[1] ? "scroll" : ""}>
                <br />
                {product?.map((el) => {
                  return (
                    <Box onClick={() => singlePage(el)} _hover={{ cursor: 'pointer' }} key={el._id}>
                      <Flex justifyContent={'space-around'}>
                        <Image src={el.img} alt="img" w="10%" h="50%" />
                        <Text w="85%">{el.name}</Text>
                      </Flex>
                      <hr />
                    </Box>
                  )
                })
                }
              </Box>
            </DrawerBody>
          </Box>
        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default Navbar