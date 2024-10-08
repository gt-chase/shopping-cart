import { useState } from 'react';
import { NewProduct } from '../types/types';

interface AddProductFormProps {
  onHideProductForm: () => void;
  onSubmit: (newProduct: NewProduct, callback?: () => void) => void;
}

export const AddProductForm = ({ onHideProductForm, onSubmit }: AddProductFormProps) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  
  const reset = () => {
    setTitle("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div className="add-form" data-testid="test-add-form">
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({ title, price, quantity }, reset);
      }}
      >
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={price}
            required
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </div>          
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={quantity}
            required
            onChange={(event) => setQuantity(Number(event.target.value))}
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onHideProductForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
};