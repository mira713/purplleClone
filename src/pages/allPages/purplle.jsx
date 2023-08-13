import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import "./product";
import { purplle } from '../../redux/product/prod.action';
import { Box, Image, Text, Grid, Flex, Button, CircularProgress ,useToast} from "@chakra-ui/react";
import { BsCartPlusFill, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { addCart } from '../../redux/cart/cart.action';
import Loading from "../../usableCompo/Loading/Loading"

const Purplle = () => {
  let product = useSelector(store => store.ProductReducer.data);
  let loads = useSelector(store => store.ProductReducer.loading);
  let dispatch = useDispatch();
  let navigate =  useNavigate();
  let toast = useToast();

  useEffect(() => {
    dispatch(purplle())
  }, [])
  let getProductDetail=(item)=>{
    localStorage.setItem('product', JSON.stringify(item));
    navigate('/singleProd')
  }
 
  let addToCart=(elem)=>{
    dispatch(addCart(elem)).then((res)=>window.location.reload())
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
      {loads? <div><Loading/></div> :  <Grid className='grid'templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg:"repeat(4,1fr)" }} gap={4}>
        {product.map((el) => {
          return (
            <Box key={el._id} className='singlePro'>
              <Image src={el.img} alt={el._id} h="50%" w='100%' onClick={()=>getProductDetail(el)}/>
              <Box className='detail'onClick={()=>getProductDetail(el)}>
                <Box className='text'>
                  <Text>{el.name}</Text>
                </Box>
                <Box className="price">
                  <Text><span style={{ fontSize: "20px" }}><b>&#8377; {el.price}</b></span>   <span style={{ color: "grey", fontSize: "13px" }}><strike>{el.mrl5}</strike></span>   <span style={{ color: 'red', fontSize: "13px" }}>{el.off2}</span></Text>
                  <Flex><Box bgColor={'green.800'} borderRadius={'30px'} w="15%" color="white" fontSize="13px" p='2px'><Flex><Text>{el.rating}</Text><Box margin='auto'><BsStarFill /></Box></Flex></Box><Text color='grey'>{el.ratingCount}</Text></Flex>
                </Box>
              </Box>
              <Flex className="flexbox">
                  <Button onClick={() => addToCart(el)}>
                    <Text >Add To Cart</Text>
                  </Button>
                </Flex>
            </Box>
          )
        })}
      </Grid>}
    </div>
  )
}

export default Purplle