import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
const Signup = () => {
    const [username, setUsername] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/signup", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true)
        }
    };
    return (
        <>
            <div className="login-box">
                <p>Signup</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input required="" name="" type="text" onChange={e => setUsername(e.target.value)} />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input required="" name="" type="email" onChange={e => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input required="" name="" type="password" onChange={e => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>
                    <button className="loginBtn">
                        Submit
                    </button>
                    {error && <span>Something Went Wrong</span>}
                </form>
                <p>Already have an account? <Link to="/login" className="a2">Login!</Link></p>
            </div>
        </>
    );
}

export default Signup;