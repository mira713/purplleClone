import { Divider , Link} from '@chakra-ui/react'
import {AiFillTwitterCircle,AiFillFacebook , AiFillGooglePlusCircle , AiTwotoneMail , AiFillYoutube , AiFillInstagram , AiFillLinkedin} from "react-icons/ai"
import './footer.css'


function Footer(){
    return(
        
    <div style={{paddingLeft:"10%",paddingRight:"10%",color:"#6c7e96"}}>
        <br/><br/><hr/>
        <div>
            
            <div className='FooterBox1'>
                <div>
                    <h1><b>PURPLLE</b></h1>
                    <Link >About us</Link>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Sitemap</p>
                </div>
                <div>
                    <h3><b>PURPLLE BUSINESS</b></h3>
                    <p>SELL on Purplle</p>
                </div>
                <div>
                    <h3><b>POLICY INFO</b></h3>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Return & Cancellation Policy</p>
                </div>
                <div>
                    <h3><b>NEED HELP?</b></h3>
                    <p>FAQ's</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <Divider/>
            <div className='FooterBox2'>
                <div>
                    <h1><b>PAYMENT</b></h1>
                    <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg" alt="logo" />
                </div>
                <div style={{marginBottom:"10px"}}>
                    <h1><b>CONNECT</b></h1>
                    <div><AiFillFacebook color='blue' className='icons' /></div>
                    <div><AiFillTwitterCircle color='#00abf0' className='icons'/></div>
                    <div><AiFillGooglePlusCircle color='#ed3833'className='icons' /></div>
                    <div><AiTwotoneMail color='#555555' className='icons'/></div>
                    <div><AiFillYoutube color='#ed3833' className='icons'/></div>
                    <div><AiFillInstagram color='#e91b90' className='icons' /></div>
                    <div><AiFillLinkedin color='#397db3' className='icons'/></div>
                </div>
            </div>
        </div>
        <div>
        Copyright © 2020 Purplle. All Rights Reserved.
        </div>
    </div>
    )
}

export default Footer