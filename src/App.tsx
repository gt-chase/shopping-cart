import { useState } from 'react'
import './index.css'
import { mockCart, mockProducts } from './Components/data'

function App() {
  const [cart, setCart] = useState(mockCart);
  const [products, setProducts] = useState(mockProducts);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart cart={cart} />
      </header>

      <main>
        <div class="product-listing">
          <h2>Products</h2>
          <ProductList products={products} />
        </div>
        <p>
          <button className="add-product-button">Add A Product</button>
        </p>
      </main>
    </div>
  )
}

export default App



const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div class="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <p>Your cart has {cart.length} items</p>
      )}


      <p>Total: ${total.toFixed(2)}</p>
      <button class="checkout" disabled>Checkout</button>
    </div>
  );
}

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          title={product.title}
          quantity={product.quantity}
          price={product.price}
        />
      ))}
    </ul>
  )
}

const Product = ({ title, quantity, price }) => {
  return (
    <li class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">{price}</p>
        <p class="quantity">{quantity} left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="edit">Edit</button>
        </div>
        <button class="delete-button"><span>X</span></button>
      </div>
    </li>
  );
}







/*
<main>
<div class="product-listing">
  <h2>Products</h2>
  <ul class="product-list">
    <li class="product">
      <div class="product-details">
        <h3>Amazon Kindle E-reader</h3>
        <p class="price">$79.99</p>
        <p class="quantity">5 left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="edit">Edit</button>
        </div>
        <button class="delete-button"><span>X</span></button>
      </div>
    </li>

    <li class="product">
      <div class="product-details">
        <h3>Apple 10.5-Inch iPad Pro</h3>
        <p class="price">$649.99</p>
        <p class="quantity">2 left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="edit">Edit</button>
        </div>
        <button class="delete-button"><span>X</span></button>
      </div>
    </li>

    <li class="product">
      <div class="product-details">
        <h3>Yamaha Portable Keyboard</h3>
        <p class="price">$155.99</p>
        <p class="quantity">0 left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart" disabled>Add to Cart</button>
          <button class="edit">Edit</button>
        </div>
        <button class="delete-button"><span>X</span></button>
      </div>
    </li>
  </ul>
</div>
<p>
  <button className="add-product-button">Add A Product</button>
</p>
</main>
*/