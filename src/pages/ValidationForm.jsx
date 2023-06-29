import "./validation.css";
import { Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostUser ,AllUsers} from '../redux/authCred/auth.action';
//import { baseUrl } from '../Utils/backendUrl'
// import Loading from "../../Components/CartProductCard/Loading";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
};

const ValidationForm = () => {
    const [fields, setFields] = useState(initialState);
    const [Load, setload] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();
    let loading = useSelector(store => store.AuthReducer.isAuthLoading)
    let authenticated = useSelector(store => store.AuthReducer.isAuth)
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        let name = fields.firstName + " " + fields.lastName;
        let number = fields.phone;
        let email = fields.email;
        let password = fields.password;

        if (password.length <= 5) {
            return toast({
                title: 'Register Failed',
                description: 'Password must be of 6 letters',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
        if (
            fields.firstName == "" ||
            fields.lastName == "" ||
            fields.email == "" ||
            fields.phone == "" ||
            fields.password == ""
        ) {
            return toast({
                title: 'Register Failed',
                description: 'fill out all the neccessary fields',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        } else {
            let obj = { name, number, email, password }
            dispatch(PostUser(obj)).then(r=>{
                if (r.payload.email) {
                    (toast({
                        title: 'Registeration successful!',
                        description: "go to login",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    }))
                    } else {
                        (toast({
                            title: 'Registeration failed!',
                            description: "Something went wrong",
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        }))
                    }
            });
        }

        setFields(initialState)
    };


    return (
        <div className="validation_form">
            {/* {Load ? (
        <Loading />
      ) : ( */}
            <form
                className="myForm"
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
            >
                {/* First Name */}
                <p className="title_validation">
                    <label>
                        * First Name
                        <br />
                        <input
                            className="validation_input"
                            type="text"
                            name="firstName"
                            value={fields.firstName}
                            onChange={handleChange}
                        />
                    </label>
                </p>

                {/* Last Name */}
                <p className="title_validation">
                    <label>
                        * Last Name
                        <br />
                        <input
                            className="validation_input"
                            type="text"
                            name="lastName"
                            value={fields.lastName}
                            onChange={handleChange}
                        />
                    </label>
                </p>

                {/* Email Address */}
                <p className="title_validation">
                    <label>
                        * Email address
                        <br />
                        <input
                            className="validation_input"
                            type="email"
                            name="email"
                            value={fields.email}
                            onChange={handleChange}
                        />
                    </label>
                </p>

                {/* Phone Number */}
                <p className="title_validation">
                    <label>
                        * Cell Phone Number
                        <br />
                        <input
                            className="validation_input"
                            type="tel"
                            name="phone"
                            value={fields.phone}
                            onChange={handleChange}
                        />
                    </label>
                </p>

                {/* Password */}
                <p className="title_validation">
                    <label>
                        * Password
                        <br />
                        <input
                            className="validation_input"
                            type="password"
                            name="password"
                            value={fields.password}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <Text mt="5px" color="red" display={fields.password.length <= 5 ? "flex" : "none"} > Password must be 6 Letters</Text>
                </p>

                {/* Confirm password */}
                {/* <p className="title_validation">
          <label>
            * Confirm Password
            <br />
            <input
              className="validation_input"
              type="password"
              name="confirm_password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.confirm_password}
            />
          </label>
          <br />
          <label className="error">
            {errors.confirm_password ? errors.confirm_password : ""}
          </label>
        </p> */}

                <p>
                    <button className="signup_continue" type="submit">
                        CREATE AN ACCOUNT
                    </button>
                </p>
            </form>
            {/* )} */}
        </div>
    );
};

export default ValidationForm;