import {
    Box,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from "@chakra-ui/react";
  import { FiGift } from "react-icons/fi";
  
  export const CartProductMeta = (props) => {
    const { img, _id, name } = props;
    return (
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={img}
          alt={_id}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text  maxH="100px" overflow="hidden" fontWeight="medium">{name}</Text>
          </Stack>
        </Box>
      </Stack>
    );
  };