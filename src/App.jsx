import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Product from "./pages/Product";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/ProductsPage" element={<ProductsPage/>}>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;