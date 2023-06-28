import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import "./product";
import {hairmakeup} from '../../redux/product/prod.action';
import {Box,Image,Text,Grid,Flex,Button,CircularProgress,useToast} from "@chakra-ui/react";
import { BsCartPlusFill, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { addCart } from '../../redux/cart/cart.action';

const Hairmakeup = () => {
   let product = useSelector(store=>store.ProductReducer.data);
   let loading = useSelector(store=>store.ProductReducer.loading);
   let loadingCart = useSelector(store => store.CartReducer.loading);
   let dispatch = useDispatch();
   let navigate = useNavigate();
   let toast = useToast();

  useEffect(()=>{
    dispatch(hairmakeup())
  },[])

  if(loading){
    <div>...loading</div>
  }
  let addToCart=(elem)=>{
    dispatch(addCart(elem))
    toast({
      title: 'Add To Cart',
      description: "item added to cart successfully.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <div>
      {loading && <Grid className='grid'templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg:"repeat(4,1fr)" }} gap={4}>
        {product.map((el) => {
          return (
            <Box key={el._id} className='singlePro'>
              <Image src={el.img} alt={el._id} h="50%" w='100%' />
              <Box className='detail'>
                <Box className='text'>
                  <Text>{el.name}</Text>
                </Box>
                <Box className="price">
                  <Text><span style={{ fontSize: "20px" }}><b>&#8377; {el.price}</b></span>   <span style={{ color: "grey", fontSize: "13px" }}><strike>{el.mrl5}</strike></span>   <span style={{ color: 'red', fontSize: "13px" }}>{el.off2}</span></Text>
                  <Flex><Box bgColor={'green.800'} borderRadius={'30px'} w="15%" color="white" fontSize="13px" p='2px'><Flex><Text>{el.rating}</Text><Box margin='auto'><BsStarFill /></Box></Flex></Box><Text color='grey'>{el.ratingCount}</Text></Flex>
                </Box>
              </Box>
              <Flex className="flexbox">
                <Button onClick={()=>addToCart(el)}>
                {/* {loading ? <Box ml="40%">
                    <CircularProgress isIndeterminate color='pink.500' size="40%" thickness={'10px'} />
                  </Box> : <BsCartPlusFill size='25' />} */}
                  <BsCartPlusFill size='25' />
                </Button>
                <Button>
                  <BsHeartFill size="25" color="red" />
                </Button>
              </Flex>
            </Box>
          )
        })}
      </Grid>}
    </div>
  )
}

export default Hairmakeup