import "./Posts.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import ImgPosts from "../images/pexels-willo-m-953457.jpg"
const PostContent = ({post}) => {

    const PF = "http://localhost:5000/images/";
    return (
        <div className="postCard">
            <div className="postImg">
                <img src={PF + post.photo} className="ImgPosts" alt="Post Image" />
            </div>
            <div className="postBx">
                <div className="stamps">
                    {post.categories.map((c) => { 
                        <span className="stamp">{c.name}</span>
                    })}
                    <span className="stamp">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <div className="details">
                    <Link to={`/post/${post._id}`}> <h4 className="blogTitle">{post.title}</h4></Link>
                    <p>{post.description}</p>
                </div>
            </div>
        </div>
    );
}

export default PostContent;