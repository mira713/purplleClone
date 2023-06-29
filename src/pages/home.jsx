import React from 'react'
import { Box, Button ,Grid,Image} from '@chakra-ui/react';
import Navbar from '../usableCompo/navbar';
import Sliders from '../usableCompo/slider';
import Footer from './footer';

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
let data2 = [
  {
    id:1,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/279823/love-beauty-and-planet-natural-murumuru-butter-and-rose-sulfate-free-body-wash-200-ml_1_display_1641365232_752a852e.jpg"
  },
  {
    id:2,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/348845/gluta-hya-flawless-glow-200ml_1_display_1684923458_d86f741e.jpg"
  },
  {
    id:3,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/290457/stay-quirky-primer-setting-spray-natural-50ml_10_display_1660305178_e2ac5a41.jpg"
  },
  {
    id:4,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/265920/good-vibes-activated-charcoal-deep-cleansing-face-scrub-in-tube-50-g_1_display_1645772097_6ff0cb00.jpg"
  },
  {
    id:5,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/157858/o3-whitening-spf-30-50-ml-15_4_display_1682419230_94301e09.jpg"
  },
  {
    id:6,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/346640/ny-bae-brightenin-primer-15-g-4-in-1-face-primer-illuminates-preps-protects-nourishes-gold-and-vitamin-e-lightweight-radiant-finish_5_display_1681479775_a3e78a5d.jpg"
  }, {
    id:7,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/348846/gluta-hya-dewy-radiance-200ml_1_display_1684923419_030764eb.jpg"
  },
  {
    id:8,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/275429/good-vibes-gold-brightening-peel-off-mask-50-gm-99_8_display_1681818001_400dd386.jpg"
  },
  {
    id:9,
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/351421/ny-bae-4-in-1-lip-play-nude-tease-4ml_2_display_1687924970_9bdbf2d2.jpg"
  }
]
let data3 = [
  {
    id:7,
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687889652_lipstick_web.jpg"
  },
  {
    id: 1,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687889652_smudge_web.jpg"
  },
  {
    id: 3,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687889651_curated-combp_erb.jpg"
  },
  {
    id:4,
    img : "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687889651_compact_web.jpg"
  }
]
let data4 = [
  {
    id:7,
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687878764_lakme_takeover-2-2596x836.jpeg"
  },
  {
    id: 1,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687882553_lakme_takeover-3-2596x836.jpeg"
  },
  {
    id: 3,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687871988_the_body_shop-2596x836-1.jpeg"
  },
  {
    id:4,
    img : "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687859211_swiss_beauty_craze_fearless-2596x836.jpg"
  }
]
let data5 = [
  {
    id:7,
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687889652_lipstick_web.jpg"
  },
  {
    id: 1,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687889651_curated-combp_erb.jpg"
  },
  {
    id: 3,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687889652_lipstick_web.jpg"
  },
  {
    id:4,
    img : "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687889651_compact_web.jpg"
  }
]
let data6 = [
  {
    id:7,
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687955635_loreal_web_.jpg"
  },
  {
    id: 1,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687947207_thick-strip-web.jpg"
  },
  {
    id: 3,
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1685454333_haircare-_thick-strip-web.jpg"
  },
  {
    id:4,
    img : "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1687849445_freegift_thickstrip_mov649_web-1.jpg"
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
        <Sliders carr={carr} settings={settings} texts={'FEATURED'} data={data} sets={sets} data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6}/>
      </Box>
      <Grid templateColumns={'repeat(2,1fr)'} gap="20px">
          <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1686825231_hair_app.jpg" alt="img"/>
          <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1687860962_minimalist_salicylic_acid-1476x1028.jpeg" alt="img"/>
          <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1687860953_biolage-matrix_with_tag-1476x1028.jpeg" alt="img"/>
          <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1687953910_maybelline_suhana_squad-1476x1028.jpeg" alt="img"/>
          <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1687860955_kaja-1476x1028.jpeg" alt="img"/>
          <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1687885044_hpapp-1.jpg" alt="img"/>
          <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1687884913_3.png" alt="img"/>
          <Image src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1687938774_app-hero-banner-size-738x514.jpg" alt="img"/>
      </Grid>
    </div>
  )
}

export default Home