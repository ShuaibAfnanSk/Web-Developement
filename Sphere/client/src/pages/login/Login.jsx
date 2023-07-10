import { useContext, useRef, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../../context/Context";
import axios from "axios";
const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data});
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE"});
        }
    };

    return (
        <>
            <div className="login-box">
                <p>Login</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input required="" name="" type="text" ref={userRef}/>
                            <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input required="" name="" type="password" ref={passwordRef}/>
                            <label>Password</label>
                    </div>
                    <button className="loginBtn" type="submit" disabled={isFetching}>
                        Submit
                    </button>
                </form>
                <p>Don't have an account? <Link to="/signup" className="a2">Sign up!</Link></p>
            </div>
        </>
    );
}

export default Login;