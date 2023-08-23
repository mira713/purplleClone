import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue as mode,
  useToast,
} from "@chakra-ui/react";
import { deleteCart, getCart, updateCart } from "../../redux/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CartItem } from "./cartItem";
import { BsCartX } from "react-icons/bs";
import { CartOrderSummary } from "./cartOrderTotal"
import "./cart.css";
import Paginantion from "../../usableCompo/pagination";
import Loading from "../../usableCompo/Loading/Loading"


const OrderPage = () => {
  let cart = useSelector(store => store.CartReducer.data);
  let total = useSelector(store => store.CartReducer.count);
  let loads = useSelector(store => store.CartReducer.loading)
  let [page, setPage] = useState(0)
  let dispatch = useDispatch();
  let toast = useToast();
  let divide = 5

  let cartTotal;
  if (total) {
    cartTotal = cart?.reduce(
      (acc, item) => acc + ((+item.price) * (+item.quantity || 1)),
      0
    );
  }

  let handleChange = (data) => {
    console.log('data', data);
    dispatch(updateCart(data))
      .then((res) => dispatch(getCart()))
      .then((res) => window.location.reload())
  }

  let handleDelete = (productId) => {
    dispatch(deleteCart(productId))
      .then((res) => dispatch(getCart()))
      .then((res) => window.location.reload())
  }
  useEffect(() => {
    dispatch(getCart(page))
    // console.log(getCart)
  }, [page])

  console.log('home', cart)
  return (
    <div>
      <Paginantion page={page} setPage={setPage} totalPage={total} divide={divide} />
      {loads ? <Loading /> :
        <Box
          maxW={{
            base: "3xl",
            lg: "6xl",
          }}
          mx="auto"
          px={{
            base: "4",
            md: "8",
            lg: "12",
          }}
          py={{
            base: "6",
            md: "8",
            lg: "12",
          }}
        >
          <Stack
            direction={{
              base: "column",
              lg: "row",
            }}
            align={{
              lg: "flex-start",
            }}
            spacing={{
              base: "8",
              md: "16",
            }}
          >
            <Stack
              spacing={{
                base: "8",
                md: "10",
              }}
              flex="2"
            >
              <Heading fontSize="2xl" fontWeight="extrabold">
                Cart ({total || 0} items)
              </Heading>

              <Stack spacing="6">
                {cart?.map((item, i) => (
                  <CartItem
                    key={i}
                    item={item}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                  />
                ))}
              </Stack>
            </Stack>
            <Flex direction="column" align="center" flex="1">
              <CartOrderSummary cartTotal={cartTotal} />
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link color={mode("#e30970", "#e30970")} href="/">
                  Continue shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>}
    </div>
  )
}

export default OrderPage