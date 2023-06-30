import {
    Box,
    Button,
    Flex,
    Heading,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useColorModeValue as mode,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { couponData } from "./coupon";
  import { FaArrowRight } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";

  const OrderSummaryItem = (props) => {
    const { label, value, children } = props;
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode("#e30970", "#e30970")}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">₹{value}</Text> : children}
      </Flex>
    );
  };
  
  export const CartOrderSummary = ({
    cartTotal,
    handleDiscount,
    discount,
    setDiscount,
  }) => {
    // console.log(couponData)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);
    const [coupon, setCoupon] = useState(null);
    const navigate = useNavigate()
  
   
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={cartTotal} />
          <OrderSummaryItem
            label="Shipping + Tax(Free Delivery)"
            value={cartTotal}
          ></OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Button
              color="black"
              textDecoration="underline"
              fontSize="14px"
              variant="link"
              ref={btnRef}
              onClick={onOpen}
            >
              Add coupon code
            </Button>
          </OrderSummaryItem>
          <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior="inside"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text fontSize={22}>APPLY COUPON</Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <RadioGroup value={coupon} onChange={setCoupon}>
                  <Stack direction="column">
                    {couponData.map((item) => (
                      <Box
                        padding="1rem"
                        border="1px"
                        borderColor="gray.200"
                        width="100%"
                        height={32}
                        flexDirection="column"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                      >
                        <Radio value={item.value}>
                          <Box
                            padding="10px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            style={{ border: "1px solid red" }}
                          >
                            <Text>{item.name}</Text>
                          </Box>
                          <Text>{item.desc}</Text>
                        </Radio>
                      </Box>
                    ))}
                  </Stack>
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="green" mr={1} >
                  Apply
                </Button>
                <Button onClick={onClose} colorScheme="red">
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              ₹{cartTotal}
            </Text>
          </Flex>
        </Stack>
        <Button
          colorScheme="pink"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
          onClick={()=>navigate('/payment')}
        >
          Checkout
        </Button>
      </Stack>
    );
  };
  
  // function ScrollingExample() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  
  //   const btnRef = React.useRef(null);
  //   return (
  //     <>
  //       <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
  //         <Stack direction="row">
  //           <Radio value="inside">inside</Radio>
  //           <Radio value="outside">outside</Radio>
  //         </Stack>
  //       </RadioGroup>
  
  //       <Button mt={3} ref={btnRef} onClick={onOpen}>
  //         Trigger modal
  //       </Button>
  
  //       <Modal
  //         onClose={onClose}
  //         finalFocusRef={btnRef}
  //         isOpen={isOpen}
  //         scrollBehavior="inside"
  //       >
  //         <ModalOverlay />
  //         <ModalContent>
  //           <ModalHeader>Modal Title</ModalHeader>
  //           <ModalCloseButton />
  //           <ModalBody>
  //             <Lorem count={15} />
  //           </ModalBody>
  //           <ModalFooter>
  //             <Button onClick={onClose}>Close</Button>
  //           </ModalFooter>
  //         </ModalContent>
  //       </Modal>
  //     </>
  //   );
  // }