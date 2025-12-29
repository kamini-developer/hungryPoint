import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

function FoodCard({ food }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(food);      // item cart me add hoga
    navigate("/cart");   // cart page open hoga
  };

  return (
    <div className="card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>₹ {food.price}</p>
      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default FoodCard;





