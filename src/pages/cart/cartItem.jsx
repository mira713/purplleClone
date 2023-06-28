import {
    CloseButton,
    Flex,
    Link,
    Select,
    useColorModeValue,
    useToast,
  } from "@chakra-ui/react";
  import { PriceTag } from "./priceTag";
  import { CartProductMeta } from "./cartProduct";
  import { useDispatch } from "react-redux";
  import {deleteCart, updateCart} from "../../redux/cart/cart.action"
  export const CartItem = ({item,handleChange,handleDelete}) => {
    const {
      _id,
      name,
      mrl5,
      img,
      price,
      off2,
      rating,
      ratingCount,
      quantity,
      src
    } = item;
     item.quantity = 1

    const dispatch=useDispatch()
    const toast = useToast()
    
  
    return (
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        justify="space-between"
        align="center"
      >
        <CartProductMeta _id={_id} img={img} name={name} />
  
        {/* Desktop */}
        <Flex
          width="full"
          justify="space-between"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <Select
            defaultValue={quantity}
            maxW="64px"
            aria-label="Select quantity"
            focusBorderColor={useColorModeValue("pink.500", "pink.200")}
            onChange={(e)=>handleChange({productId:item._id,quantity:+e.target.value})}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <PriceTag
            quantity={quantity}
            off2={off2}
            price={price}
            mrl5={mrl5}
          />
          <CloseButton
            aria-label={`Delete ${name} from cart`}
            onClick={()=>handleDelete(item._id)}
          />
        </Flex>
  
        {/* Mobile */}
        <Flex
          mt="4"
          align="center"
          width="full"
          justify="space-between"
          display={{
            base: "flex",
            md: "none",
          }}
        >
          <Select
            value={quantity}
            maxW="64px"
            aria-label="Select quantity"
            focusBorderColor={useColorModeValue("pink.500", "pink.200")}
            onChange={(e)=>handleChange({productId:item._id,quantity:+e.target.value})}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <Link fontSize="sm" textDecor="underline">
            Delete
          </Link>
  
          <PriceTag
            quantity={quantity}
            off2={off2}
            price={price}
            mrl5={mrl5}
          />
        </Flex>
      </Flex>
    );
  };

