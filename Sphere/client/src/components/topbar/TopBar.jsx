import "./TopBar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import myImage from "../images/my-imagee-min.jpg"
import logo from "../images/64759ea8f7c1766d97ff2e4b_icon-01.svg"
import { useContext } from "react"
import { Context } from "../../context/Context"
const TopBar = () => {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="NavBar">
            <div className="navLogo">
                <img src={logo} className="Logo" alt="" />
                <Link to="/"><h5>SPHERE</h5></Link>
            </div>
            <div className="navLeft">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="Linkbtn" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="Linkbtn" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="Linkbtn" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="Linkbtn" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className="navRight">
                <ul className="topList">

                    {
                        user ? (
                            <>
                                <Link to="/settings">
                                    <img src={PF + user.profilePic} className="profileImage" alt="" />
                                </Link>
                                <li className="Logout" onClick={handleLogout}>{user && 'LOGOUT'}</li>
                            </>
                        ) : (
                            <>
                                <li className="topListItemActive">
                                    <Link className="Linkbtn" to="/login">LOGIN</Link>
                                </li>
                                <li className="topListItemActive">
                                    <Link className="Linkbtn" to="/signup">SIGNUP</Link>
                                </li>
                            </>
                        )
                    }

                </ul>
            </div>
        </div>
    );
}

export default TopBar;