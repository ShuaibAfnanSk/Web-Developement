import "./Settings.css"
import ProfileImage from "../images/my-imagee-min.jpg";
import TopBar from "../../components/topbar/TopBar";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios"
const SettingsSection = () => {

    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:5000/images/";


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    }
    return (
        <>
            <TopBar />
            <div className="Settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsDeleteTitle">Delete Account</span>
                    </div>
                    <form className="settingsForm" onSubmit={handleSubmit}>
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} className="ProfileImage" alt="" />
                            <div>
                                <label htmlFor="fileInput">
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </label>
                                <input type="file" name="" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                            </div>
                        </div>
                        <label>Username</label>
                        <input type="text" name="" id="" className="inputForm" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                        <label>Email</label>
                        <input type="email" name="" id="" className="inputForm" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" name="" className="inputForm" id="" onChange={(e) => setPassword(e.target.value)} />
                        <button className="FormSubmit" type="submit">
                            Update
                        </button>
                        {success && <span>Profile is Updated...</span>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default SettingsSection;