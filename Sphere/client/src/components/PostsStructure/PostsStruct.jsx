import { useEffect, useState } from "react";
import PostContent from "../Post/Posts";
import "./PostsStruct.css"
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const PostsStruct = ({ posts }) => {

    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <>
            <div className="PostsHeader">
                <h3>Blogs</h3>
                <h5>Blogs Posted by People Around the World</h5>
            </div>
            <div className="filter">
                {cats.map(c => (
                    <Link to={`/?category=${c.name}`}><span className="FilterBtn">{c.name}</span></Link>
                ))}

            </div>
            <section className="Posts">
                {posts.map((p) => (
                    <PostContent post={p} />
                ))}
            </section>
        </>
    );
}

export default PostsStruct;