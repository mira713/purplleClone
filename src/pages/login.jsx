import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { SetLocal } from "../Utils/localStorage";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { LoginUser } from "../redux/authCred/auth.action"; 
const baseUrl = 'https://average-wrap-eel.cyclic.app'
// import Loading from "../../Components/CartProductCard/Loading";
// import swal from "sweetalert"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Load, setload] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const authenticated = useSelector(store=>store.AuthReducer.isAuth);
  const token = useSelector(store=>store.AuthReducer.token)

  const handleLogin = (event) => {
    event.preventDefault();
   let obj = {email:email,password:password}
    if (email !== "" && password !== "") {

      dispatch(LoginUser(obj))
   console.log('auth',authenticated) 
    }
  };

useEffect(()=>{
  if(authenticated){
    toast({
      title: 'Login successful',
      description: 'you are logged in',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    navigate('/')
  }
  else if(authenticated===false){
    toast({
      title:"Login failed",
      description : "Something went wrong, Please try again later",
      status : "error",
      duration :5000,
      isClosable : true
    })
  }
},[authenticated])
  return (
    <div className="login_parent">
      {/* {Load ? (
        <Loading />
      ) : ( */}
      <div className="existing_and_new_users">
        <div className="existing_customer">
          <p className="existing_user_tag">Existing Customers</p>

          <div className="login_form">
            <form onSubmit={handleLogin}>
              {/* For email */}
              <p>
                <label>
                  * Email address
                  <br />
                  <input
                    className="input_login"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                  />
                </label>
              </p>

              {/* Form password */}
              <p>
                <label>
                  * Password
                  <br />
                  <input
                    className="input_login"
                    type="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
              </p>

              <p className="forgot_password">FORGOTTEN YOUR PASSWORD?</p>

              <p>
                <button className="login_button">
                  LOGIN TO YOUR ACCOUNT
                </button>
              </p>
            </form>
          </div>
        </div>

        <div className="new_customers">
          <p className="new_customes_tag">New Customers</p>
          <Link to="/register">
            <button className="continue_to_register">CONTINUE</button>
          </Link>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Login;