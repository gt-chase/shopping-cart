export const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <p>Your cart has {cart.length} items</p>
      )}


      <p>Total: ${total.toFixed(2)}</p>
      <button className="checkout" disabled>Checkout</button>
    </div>
  );
}