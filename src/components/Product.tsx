import { useState } from "react";
import { Product as ProductType } from "../types/types";
import { EditProductForm } from "./EditProductForm";

export const Product = ({ title, quantity, price }: ProductType) => {
  const [showEditProductForm, setShowEditProductForm] = useState(false)
  
  const handleHideEditForm = (): void => {
    setShowEditProductForm(false);
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit"onClick={() => setShowEditProductForm(true)}>Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
      {showEditProductForm && (
        <EditProductForm
          initialTitle={title}
          initialPrice={price}
          initialQuantity={quantity}
          onHideEditForm={handleHideEditForm}
        />
      )}
    </li>
  );
}