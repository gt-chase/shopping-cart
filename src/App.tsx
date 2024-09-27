import { useState, useEffect } from 'react'
import './index.css'
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { AddProductForm } from './components/AddProductForm';
import { getProducts, createProduct } from './services/products';
import { Product, NewProduct } from './types/types'
import { editProduct } from './services/products';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [showProductForm, setShowProductForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProducts();
  }, []);

  const handleHideForm = (): void => {
    setShowProductForm(false);
  };

  const handleAddProduct = async (  
    newProduct: NewProduct,
    callback?: () => void
  ) => {
    try {
      const data = await createProduct(newProduct);
      setProducts((prevState) => prevState.concat(data));
      if (callback) {
        callback();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditProduct = async (
    updatedProduct,
    productId,
    callback?: () => void
  ) => {
    try{
      // const product = products.find(n => n.productId === productId);
      await editProduct(updatedProduct, productId)
      
      setProducts(products.map(product => product.id !== productId ? product : updatedProduct))
      } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart cart={cart} />
      </header>

      <main>
        <div className="product-listing">
          <h2>Products</h2>
          <ProductList products={products} />
        </div>

        {showProductForm ? (
          <AddProductForm
            onSubmit={handleAddProduct}
            onHideProductForm={handleHideForm}
          />
        ) : (
          <p>
            <button className="add-product-button" onClick={() => setShowProductForm(true)}>Add A Product</button>
          </p>
        )}

      </main>
    </div>
  )
}

export default App