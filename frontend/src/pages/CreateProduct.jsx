import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/productService.jsx";

const CreateProduct = () => {
  const [form, setForm] = useState({
    Name: "",
    Price: "",
    Image: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(form);
    navigate("/");
  };

  return (
    <div className="form-page">
      <form className="product-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Create Product</h1>

        <input
          className="form-input"
          type="text"
          placeholder="Enter the name of the product"
          onChange={(e) => setForm({ ...form, Name: e.target.value })}
        />

        <input
          className="form-input"
          type="number"
          placeholder="Enter the price of the product"
          onChange={(e) => setForm({ ...form, Price: e.target.value })}
        />

        <input
          className="form-input"
          type="text"
          placeholder="Enter the image URL of the product"
          onChange={(e) => setForm({ ...form, Image: e.target.value })}
        />

        <button className="submit-btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;