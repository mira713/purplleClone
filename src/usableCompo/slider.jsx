import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box,Text } from '@chakra-ui/react';

const Sliders = ({ carr, settings,texts, data, sets, data1 }) => {
    return (
        <div style={{width:"98%"}}>
            <div>
                <Slider {...settings}>
                    {
                        carr.map((item) => (
                            <div key={item.id}>
                                <img
                                    src={item.img} alt="head" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <br />
            <Box>
                <Text fontWeight={'bolder'} textAlign={'left'}p='1%'>{texts}</Text>
            </Box>
            <div>
                <Slider {...sets}>
                    {
                        data.map((item) => (
                            <div key={item.id}>
                                <img
                                    src={item.img} alt="head" />
                            </div>
                        ))
                    }
                </Slider>
                <Slider {...settings}>
                     {
                        data1.map((item)=>(
                            <div key={item.id}>
                                <img
                                   src={item.img} alt="mid"
                                />
                            </div>
                        ))
                     }
                </Slider>
            </div>
        </div>
    )
}

export default Sliders