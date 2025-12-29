import { useContext } from "react";
import  CartContext  from "../context/CartContext";


function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-wrapper">
      {/* LEFT SIDE */}
      <div className="cart-left">
        <h3>My Cart ({cart.length})</h3>

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p className="price">₹{item.price}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <div className="cart-actions">
                <button>Save for later</button>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="cart-right">
        <h4>PRICE DETAILS</h4>

        <div className="price-row">
          <span>Price ({cart.length} items)</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="price-row discount">
          <span>Discount</span>
          <span>-₹0</span>
        </div>

        <hr />

        <div className="price-row total">
          <span>Total Amount</span>
          <span>₹{totalPrice}</span>
        </div>

        <button className="order-btn">PLACE ORDER</button>
      </div>
    </div>
  );
}

export default Cart;

