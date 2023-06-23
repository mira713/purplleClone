import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import Navbar from '../usableCompo/navbar';
import Sliders from '../usableCompo/slider'
import Footer from './footer'

let carr = [
  {
    id:7,
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1684610103_header_web.gif"
  },
  {
    id: 1,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1684564970_dot_-_key_heart_banner-2596x836-3.jpeg"
  },
  {
    id: 2,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1684565735_maybelline_suhana_squad-2596x836-3.jpg"
  },
  {
    id: 3,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1684513188_web-hp.gif"
  },
  {
    id: 4,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1684564947_swiss_beauty_craze__lips-2596x836-1.jpeg"
  },
  {
    id:5,
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1684514203_1684496352_exclusivestamp01_hpweb.jpg"
  },
  {
    id:6,
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1684565444_biolage-matrix_with_tag-2596x836-7.jpeg"
  },
  {
    id:7,
    img : "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1685519972_hair_web-1.jpg"
  },
  {
    id : 8,
    img : "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1686894740_myglamm_super_serum-_with_elite_tag-2596x836.jpeg"
  }
]

let data1 = [
  {
    id:7,
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1686939109_swiss-beauty_lips_2596x836.jpeg"
  },
  {
    id: 1,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1686939098_minimalist_haircare_2596x836.jpeg"
  },
  {
    id: 3,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1686939115_swiss-beauty_bfor-base_2596x836.jpeg"
  }
]

let data = [
  {
    id:1,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/336409/plum-green-tea-pore-cleansing-face-wash-75-ml_1_display_1663045075_d6470430.jpg"
  },
  {
    id:2,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/327524/pond-s-bright-beauty-spot-less-glow-face-wash-with-vitamins-200-g-56_8_display_1654752581_ffbbcf95.jpg"
  },
  {
    id:3,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/345982/dermdoc-by-purplle-5-percentage-glycolic-acid-under-arm-treatment-100ml-darkened-underarms-lightening-spray-body-odour-dark-elbow-dark-neck-spray-glycolic-acid_13_display_1683108561_e3ebc7ba.jpg"
  },
  {
    id:4,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/307565/maybelline-new-york-lash-sensational-sky-high-waterproof-mascara-lengthening-and-volumizing-mascara-with-bamboo-exract-and-fibres-very-black-6-ml_1_display_1678336663_76640fad.jpg"
  },
  {
    id:5,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/275236/alps-goodness-anti-dandruff-shampoo-for-dry-scalp-44-23_12_display_1667380058_f94ac8da.jpg"
  },
  {
    id:6,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/125354/l-a-girl-pro-coverage-hd-foundation-fair-28-ml-70_1_display_1675148030_1046abfc.jpg"
  }, {
    id:7,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/341643/garnier-bright-complete-vitamin-c-booster-face-serum-30-ml-15_2_display_1647428584_5624593e.jpg"
  },
  {
    id:8,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/128244/faces-magneteyes-dramatic-volumizing-mascara-black-9-5-ml-35_3_display_1676009690_f70bb092.jpg"
  },
  {
    id:9,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/336409/plum-green-tea-pore-cleansing-face-wash-75-ml_1_display_1663045075_d6470430.jpg"
  },
  {
    id:10,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/327524/pond-s-bright-beauty-spot-less-glow-face-wash-with-vitamins-200-g-56_8_display_1654752581_ffbbcf95.jpg"
  }
]
const Home = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  var sets = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div>
      <Box>
        <Sliders carr={carr} settings={settings} texts={'FEATURED'} data={data} sets={sets} data1={data1}/>
      </Box>
    </div>
  )
}

export default Home