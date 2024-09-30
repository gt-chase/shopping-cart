import { render, screen } from "@testing-library/react";
import App from "./App";
import * as productService from "./services/products"
import { Product } from "./types/types";
import userEvent from "@testing-library/user-event";

vi.mock("./services/products.ts");

const mockedProductService = vi.mocked(productService);

describe("App", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("fetches products and renders them", async () => {
    const products: Product[] = [
      {
        _id: "1",
        title: "Amazon Kindle E-reader",
        quantity: 5,
        price: 79.99,
      },
    ];
    mockedProductService.getProducts.mockResolvedValue(products);
    render(<App />);
    const productHeading = await screen.findByRole("heading", {
        level: 3,
        name: "Amazon Kindle E-reader",
    });
    expect(productHeading).toBeInTheDocument();
  });
  it("shows the add product form when 'add-product-button' is clicked", async () => {
    const products: Product[] = [
      {
        _id: "1",
        title: "Amazon Kindle E-reader",
        quantity: 5,
        price: 79.99,
      },
    ];
    mockedProductService.getProducts.mockResolvedValue(products);
    
    render(<App />);
    const button = await screen.findByRole('button', { name: /Add A Product/ });
    const user = userEvent.setup();

    await user.click(button);
    const div = await screen.findByTestId('test-add-form');
    // <div className="add-form">
    expect(div).toBeInTheDocument()
    
  });
});
