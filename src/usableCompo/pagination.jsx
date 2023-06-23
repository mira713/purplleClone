import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { BOLD, CENTER, FILL_PARENT,  PINK } from "../pages/type";
import {MdArrowForwardIos,MdArrowBackIosNew} from "react-icons/md"

export default function Paginantion({page,setPage,totalPage,divide}){

    return <HStack mt={6}  w={FILL_PARENT} justify={CENTER}>
        <IconButton colorScheme={PINK}  icon={<MdArrowBackIosNew />}  isDisabled={page+1==1} onClick={()=>{
            setPage((prev)=>prev-1)
        }}></IconButton>
        <Text fontWeight={BOLD} color={PINK}>{page+1}</Text>
        <IconButton colorScheme={PINK} icon={<MdArrowForwardIos  />} isDisabled={page+1==Math.ceil(totalPage/divide)||totalPage==0} onClick={()=>{
            setPage((prev)=>prev+1)
        }}></IconButton>
    </HStack>
}