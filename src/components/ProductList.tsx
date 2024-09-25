import { Product } from './Product';

export const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map(product => (
        <Product
          key={product._id}
          title={product.title}
          quantity={product.quantity}
          price={product.price}
        />
      ))}
    </ul>
  )
}