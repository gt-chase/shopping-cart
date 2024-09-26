import { Product } from './Product';
import { Product as ProductType } from '../types/types';

interface ProductListProps {
  products: ProductType[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="product-list">
      {products.map(product => (
        <Product key={product._id} {...product} />
      ))}
    </ul>
  )
}