export interface Product {
    _id: string;
    title: string;
    price: number;
    quantity: number;
    createdAt?: string;
    updatedAt?: string;
    _v?: number;
}

export type NewProduct = Omit<Product, "_id">;