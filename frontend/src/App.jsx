import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateProduct/>}/>
        <Route path="/update/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
