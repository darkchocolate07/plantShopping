import PlantationImage from '../Assets/Plantation.jpg'
import './Home.css'

import { useNavigate  } from 'react-router-dom';

const HomePage = () => {


    const navigate=useNavigate()
    const HandleClick = () => {
        navigate('/ProductPage'); // Navigate to the ProductPage
    };

    return ( 
        
        <div class="header">
            <img src={PlantationImage} alt="Background" class="background-image"></img>
            <div class="overlay"></div>
            <div class="content">
                <div class="left-header">
                    <h1>Welcome To Paradise Nursery</h1>
                    <p>Where Green Meets Serenity</p>
                    <button onClick={HandleClick}>Get Started</button>
                </div>
                <div class="right-header">
                    <p>Welcome to Paradise Nursery, where green meets serenity!</p>
                    <section>
                        <p>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.</p>
                        <p>Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we’re here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.</p>
                        <p>Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.</p>
                    </section>
                </div>
            </div>
        </div>

    );
}
 
export default HomePage;