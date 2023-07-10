import heroImg from "../images/pexels-karina-zhukovskaya-6446685.jpg"
import buttonImg from "../images/6370cbe369a5041a17df6ce9_icon-04.svg"
import "./Hero.css"
const HeroSection = () => {
    return (
        <section className="hero">
            <div className="heroLeft">
                <div className="upSection">
                    <h1 className="heroTitle">AlchemySphere</h1>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to our blog creation and sharing platform! Unleash your creativity and share your passion with the world. Discover captivating stories, insightful articles, and engaging content. Join a community of writers, connect with like-minded individuals, and make your voice heard. Start writing, exploring, and inspiring today!</p>
                </div>
                <div className="downSection">
                    <div>
                        <h4>BLOGS</h4>
                        <p>Start Exploring and Creating Blogs for free</p>
                    </div>
                    <a href=""><button className="exploreBtn"> 
                        <img src={buttonImg} className="ButtonImg" alt="" />
                        <h6>Explore more</h6>
                        <img src={buttonImg} className="ButtonImg" alt="" />
                    </button></a>
                </div>
            </div>
            <div className="heroRight">
                <img src={heroImg} className="heroImg" alt="" />
            </div>
        </section>
    );
}

export default HeroSection;