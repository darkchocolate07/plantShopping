import NavBar from "./NavBar";
import './ProductPage.css'

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItemToCart } from './CartSlice';
import { useSelector } from "react-redux";

const ProductPage = () => {

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    id: 1,
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    id: 2,
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    id: 3,
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    id: 4,
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    id: 5,
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    id: 6,
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    id: 7,
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    id: 8,
                    name: "Marigold",
                    image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    id: 9,
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20"
                }
            ]
        },
    ];
    
    const cartItems = useSelector(state => state.cart.cartItems);

    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products


  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
  };

  const isProductInCart=(productId)=>{
    return cartItems.some(item => item.id === productId);
  }



  return ( 
    <div>
        <NavBar/>
        {plantsArray.map((category, index) => (
            <div key={index} className="Category-header">
                <h1>{category.category}</h1>
                <div className="product-list">
                    {category.plants.map((plant) => (
                    <div className="product-card" key={plant.id}>
                        <div className="product-title">{plant.name}</div>
                        <img className="product-image" src={plant.image} alt={plant.name} />
                        <div className="product-cost">{plant.cost}</div>
                        <div className="product-description">{plant.description}</div>
                        <button
                        className={`add-to-cart-btn ${isProductInCart(plant.id) ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isProductInCart(plant.id)}>
                                {isProductInCart(plant.id) ? 'In Cart' : 'Add to Cart'}
                        </button>
                    </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

}
 
export default ProductPage;