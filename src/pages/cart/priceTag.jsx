import {
    Box,
    HStack,
    Stack,
    Text,
    useColorModeValue as mode,
  } from "@chakra-ui/react";
  
  export const PriceTag = (props) => {

    const { quantity, off2, price, mrl5 } = props;
    //console.log("props",props)
    return (
      <Stack>
        <Text
          fontWeight="semibold"
          fontSize="2xl"
          color={mode("gray.800", "gray.100")}
        >
          ₹{quantity * price}
        </Text>
        <Box
          display="flex"
          gap="10px"
          justifyContent="flex-end"
          alignContent="flex-end"
        >
          <Text fontSize="14px" textDecorationLine="line-through">₹{mrl5}</Text>
          <Text color="pink.500" fontSize="14px">{off2}</Text>
        </Box>
      </Stack>
    );
  };