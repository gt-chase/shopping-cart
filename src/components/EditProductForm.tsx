import { useState, useEffect } from "react";

interface EditProductFormProps {
    id: string;
    initialTitle: string;
    initialPrice: number;
    initialQuantity: number;
    onHideEditForm: () => void;
}

export const EditProductForm = ({ id, initialTitle, initialPrice, initialQuantity, onHideEditForm}: EditProductFormProps) => {
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [quantity, setQuantity] = useState(initialQuantity);
    
    useEffect(() => {
        setTitle(initialTitle);
        setPrice(initialPrice);
        setQuantity(initialQuantity);
      }, [initialTitle, initialPrice, initialQuantity]);
    
    return (
        <div className="edit-form">
            <h3>Edit Product</h3>
            <form>
                <div className="input-group">
                    <label htmlFor="product-name">Product Name</label>
                    <input
                        type="text"
                        id="product-name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        aria-label="Product Name"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="product-price">Price</label>
                    <input
                        type="number"
                        id="product-price"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        aria-label="Product Price"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="product-quantity">Quantity</label>
                    <input
                        type="number"
                        id="product-quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        aria-label="Product Quantity"
                    />
                </div>

                <div className="actions form-actions">
                    <button type="submit">Update</button>
                    <button type="button" onClick={onHideEditForm}>Cancel</button>
                </div>
            </form>
        </div>
    );
};
