import "./NavBar.css"
import plantImage from '../Assets/plant.jpg'
import cartImage from '../Assets/cart.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const TotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return ( 
        <nav class="navbar">
            <div class="navbar-left">
                <img src={plantImage} alt="Logo" class="logo"></img>
                <div class="navbar-title">
                    <Link to="/">
                        <h1>Paradise Nursery</h1>
                        <p>Where Green Meets Serenity</p>
                    </Link>
                </div>
            </div>
            <div class="navbar-center">
                <Link to="/ProductPage" class="navbar-link">Plants</Link>
            </div>
            <div class="navbar-right">
                <div class="cart">
                <Link to="/Cart" className="navbar-link">
                <div className="cart-container">
                    <img src={cartImage} alt="Cart" className="cart-icon" />
                    <span className="cart-count">{TotalItems}</span>
                </div>
                </Link>
                </div>
            </div>
        </nav>

    );
}
 
export default NavBar;
