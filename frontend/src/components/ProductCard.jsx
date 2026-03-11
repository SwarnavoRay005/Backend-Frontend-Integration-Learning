import { deleteProduct } from "../services/productService.jsx";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, refresh }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;

    await deleteProduct(product._id);
    refresh();
  };

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={product.Image}
        alt="Product"
      />

      <div className="product-info">
        <h3 className="product-name">{product.Name}</h3>
        <p className="product-price">₹{product.Price}</p>
      </div>

      <div className="product-buttons">
        <button
          className="edit-btn"
          onClick={() => navigate(`/update/${product._id}`)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;