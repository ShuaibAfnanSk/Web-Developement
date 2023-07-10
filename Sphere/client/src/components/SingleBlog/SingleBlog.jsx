import "./SingleBlog.css";
import blogImage from "../images/pexels-willo-m-953457.jpg"
import authorImage from "../images/my-imagee-min.jpg"
import TopBar from "../topbar/TopBar";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const SingleBlogSection = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [story, setStory] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username, 
                title, 
                description, 
                story
            },
            );
            // window.location.reload();
            setUpdateMode(false)
        } catch (err) {

        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) {

        }
    }

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setStory(res.data.story)
            setDescription(res.data.description)
        };
        getPost()
    }, [path])

    return (
        <>
            <TopBar />
            <section className="BlogHolder">
                <div className="blogLeft">
                    <div className="blogHeader">
                        {updateMode ? (<input type="text" name="" className="updateInput" value={title} onChange={(e) => setTitle(e.target.value)} />) : (<h3>{title}</h3>)}
                        {updateMode ? (<input type="text" name="" className="updateInput" value={post.description} onChange={(e) => setDescription(e.target.value)} />) : (<p>{description}</p>)}
                    </div>
                    {post.username === user?.username && (
                        <div className="buttons">
                            <i class="fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                            <i class="fa-regular fa-trash-can" onClick={handleDelete}></i>
                        </div>
                    )}
                    <div className="blogDetails">
                        <span className="author">
                            <div className="authorImg">
                                <img src={authorImage} alt="" />
                            </div>
                            <div className="authorDetails">
                                <span>
                                    <Link to={`/?user=${post.username}`}><h5>{post.username}</h5></Link>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, dolore!</p>
                                </span>
                                <span className="socailIcons">
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                </span>
                            </div>
                        </span>
                        <span className="stampsHere">
                            <h5>Date</h5>
                            <h5>{new Date(post.createdAt).toDateString()}</h5>
                        </span>
                        <span className="stampsHere">
                            <h5>Category</h5>
                            <h5>Anime</h5>
                        </span>
                    </div>
                </div>
                <div className="blogRight">
                    {post.photo && (<img src={PF + post.photo} className="blogPhoto" alt="" />)}
                </div>
            </section>
            <section className="BlogContent">
                {updateMode ? (<textarea type="text" name="" className="updateInput updateInputText" value={story} onChange={(e) => setStory(e.target.value)} />) : (<p className="blogStory">{story}</p>)}
                {updateMode && <button className="" onClick={handleUpdate}>Update</button>}
            </section>
        </>
    );
}

export default SingleBlogSection;