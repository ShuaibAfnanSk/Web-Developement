import { useEffect, useState } from "react";
import HeroSection from "../../components/Hero/Hero";
import TopBar from "../../components/topbar/TopBar";
import "./Home.css"
import axios from "axios"
import PostsStruct from "../../components/PostsStructure/PostsStruct";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const HomePage = () => {
    const [posts,setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fetchPosts();
    },[search]);
    return (
        <>
            <TopBar />
            <HeroSection />
            <PostsStruct posts={posts} />
        </>
        
    );
}

export default HomePage;