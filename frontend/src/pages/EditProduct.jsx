import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../services/productService.jsx";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Name: "",
    Price: "",
    Image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProduct(id);

      setForm({
        Name: response.data.product.Name || "",
        Price: response.data.product.Price || "",
        Image: response.data.product.Image || "",
      });
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, form);
    navigate("/");
  };

  return (
    <div className="form-page">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Edit Product</h2>

        <input
          className="form-input"
          type="text"
          value={form.Name || ""}
          placeholder="Product Name"
          onChange={(e) => setForm({ ...form, Name: e.target.value })}
        />

        <input
          className="form-input"
          type="number"
          value={form.Price || ""}
          placeholder="Product Price"
          onChange={(e) => setForm({ ...form, Price: e.target.value })}
        />

        <input
          className="form-input"
          type="text"
          value={form.Image || ""}
          placeholder="Image URL"
          onChange={(e) => setForm({ ...form, Image: e.target.value })}
        />

        <button className="submit-btn" type="submit">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
