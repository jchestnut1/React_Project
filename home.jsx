import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="banner-1">
                <div className="banner-text">
                    <h2>Vegetable Palace</h2>
                    <h4>Fresh Vegetables You'll Tell Your Friends About</h4>
                </div>
            </div>
           
        
        <img src="/home2.jfif" alt=""></img>

        <Link className="btn btn-lg btn-dark" to="/catalog">
            Fresh Catalog! Check it out!
        </Link>
        </div>
    );
};

export default Home;