import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./product.css";
import { useSearchParams ,useNavigate} from "react-router-dom";
import { getData } from '../redux/product/prod.action';
import { Box, Image, Text, Grid, Heading, Flex, Button,CircularProgress ,useToast} from "@chakra-ui/react";
import Paginantion from '../usableCompo/pagination';
import { BsCartPlusFill, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { addCart } from '../redux/cart/cart.action';

const Product = () => {
  let product = useSelector(store => store.ProductReducer.data);
  let loading = useSelector(store => store.CartReducer.loading);
  // const [searchParams, setSearchParams] = useSearchParams();
  let dispatch = useDispatch();
  let [page, setPage] = useState(0);
  let [query, setQuery] = useState("");
  let totalPage = 240;
  let divide = 10;
  let navigate = useNavigate();
  let toast = useToast()

  useEffect(() => {
    dispatch(getData(page))
  }, [page])

  if (loading) {
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
  //  let query = searchParams.get("q")
  //   ? searchParams.get("q").toLocaleLowerCase()
  //   : "";
  console.log(product)
  return (
    <div>
      {loading && <Grid className='grid'>
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
      <Paginantion page={page} setPage={setPage} totalPage={totalPage} divide={divide} />
    </div>
  )
}

export default Product