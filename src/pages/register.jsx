import "./Register.css";
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from "react-icons/ai"
import ValidationForm from "./ValidationForm";
import { useDispatch, useSelector } from "react-redux";
// import swal from "sweetalert";

function Register() {
 return (
    <div className="register_page">
       <div className="register_auth">
        <div className="signup_fb_google">
          <p className="about_you">About You</p>
          <p className="sign_up_with">Sign Up With</p>

          <div className="facebook_google">
            <div className="facebook">
             <AiFillFacebook
                  color= "blue"
                 size="30"
              />
              <p className="facebook_name">Facebook</p>
            </div>
            <div className="google">
              <FcGoogle
                  color= "#f73c02"
                  size="30"
              />
              <p className="google_name">Google</p>
            </div>
          </div>

          <hr
            style={{
              marginTop: "40px",
              color: "1px solid gray",
            }}
          />
        </div>

        <div className="signup_form">
          <p className="create_email_text">Or create an email account</p>

          <ValidationForm />
        </div>
       </div>
    </div>
 );
}

export default Register;