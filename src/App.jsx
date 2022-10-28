import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDet from "./pages/ProductDet";
import PriceList from "./pages/PriceList";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Calendar from "./pages/CALENDAR";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/ProductDet/:id" element={<ProductDet/>}/>
      <Route path="/ProductsPage" element={<ProductsPage/>}/>
      <Route path="/PriceList" element={<PriceList/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/CALENDAR" element={<Calendar/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
