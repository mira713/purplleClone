import React,{useEffect,useState} from 'react'
import { Flex, Box, Image, Text, Select, Button, useToast ,CircularProgress} from '@chakra-ui/react'
import { BsStarFill, BsHeart} from "react-icons/bs";
import {addCart} from '../redux/cart/cart.action';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SingleProd = () => {
    //let products = JSON.parse(localStorage.getItem('product'));
    let [product, setProduct] = useState(JSON.parse(localStorage.getItem('product')))
    let [auth, setAuth] = useState(localStorage.getItem('isAuth')?true:false)
    let loading = useSelector(store => store.CartReducer.loading);
    let data = useSelector(store=>store.CartReducer.data)
    let dispatch=useDispatch();
    let navigate = useNavigate();
    let toast = useToast()
    const [loadingCart,setCartLoading] = useState(false)
    const[added, setAdded] = useState(false);
    const [present, setPresent] = useState(false)


    
    let addToCart=(elem)=>{
        setCartLoading(true)
        dispatch(addCart(elem)).then((r)=>{
          if(r.payload.status==1){
            setCartLoading(false)
            setAdded(true)
            setPresent(true)
            //window.location.reload()
            toast({
                title: 'Add To Cart',
                description: "item added to cart successfully.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
          }else{
            setCartLoading(false)
             toast({
                title: 'request failed',
                description: "oops!! something went wrong.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
          }
        })
        
      }


    return (
        <div>
            <Flex justifyContent={'space-around'} key={product?._id}>
                <Box w='49%'>
                    <Image src={product?.img} alt={product?._id}  />
                </Box>
                <Box w='49%'>
                    <Box className='detail' textAlign={'justify'}>
                        <Box>
                            <Text fontFamily={'serif'} fontSize="18px" fontWeight={'medium'}>{product?.name}</Text>
                        </Box>
                        <Box>
                            <br />
                            <Flex><Box bgColor={'green.800'} borderRadius={'30px'} w="15%" color="white" fontSize="13px" p='2px'><Flex><Text>{product?.rating}</Text><Box margin='auto'><BsStarFill /></Box></Flex></Box><Text color='grey'>{product?.ratingCount}</Text></Flex><br />
                            <Text><span style={{ fontSize: "20px" }}><b>&#8377; {product?.price}</b></span>   <span style={{ color: "grey", fontSize: "13px" }}><strike>{product?.mrl5}</strike></span>   <span style={{ color: 'red', fontSize: "13px" }}>{product?.off2}</span></Text>
                        </Box>
                        <Box>
                            <Text fontSize="20px" mt={['', '', '', '3%']}>Shades</Text>
                            <Select>
                                <option>01 Brown Pie</option>
                                <option>02 Macron</option>
                                <option>03 Apple Pie</option>
                                <option>04 Pink Gelly</option>
                                <option>05 Strawberry Cash</option>
                            </Select>
                        </Box>
                        <Flex justifyContent={'space-around'} mt={['', '', '', '5%']}>
                        {/* onClick={()=>addToCart(product)} */}
                            <Button w='48%' color='white' bgColor={'purple.500'} p={['', '', '', "6%"]} _hover={{ bgColor: "purple.800" }} onClick={()=>{if(auth){addToCart(product)}else{navigate('/login')}}}>
                            {loadingCart?<Text>Adding...</Text>:<Text >Add To Cart</Text>}
                            </Button>
                            <Button w="48%" display={'flex'} p={['', '', '', "6%"]}>
                                <BsHeart size="25" color="purple.100" />
                                <Text>Wishlist</Text>
                            </Button>
                        </Flex>
                        <Box mt={['', '', '', '10%']}>
                            <Text fontSize={['', '', '', '22px']} fontWeight={'medium'} fontFamily={'sans-serif'}>AVAILABLE OFFERS (3)</Text>
                            <Box bgColor="pink" borderRadius="5px">
                                <Text p="10px">Exclusively for first time buyers, USE CODE: APPFIRST to Get Extra 10% off on every order.</Text>
                                <hr />
                                <Text p="10px">Buy 3 and Get an Extra 15% off</Text><hr/>
                                <Text p="10px">Swiss Beauti Craze:Get a free surprise gift at Rs. 299+</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default SingleProd