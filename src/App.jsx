import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDet from "./pages/ProductDet";
import PriceList from "./pages/PriceList";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Calendar2 from "./pages/CALENDAR2";
import Calendar3 from "./pages/CALENDAR3";
import PROBLEMS from "./pages/PROBLEMS";
import Bon from "./pages/Bon";
import NEWS from "./components/NEWS";
import Admin from "./pages/Admin";
import CalendarEdit from "./pages/CalendarEdit";
import Regulamin from "./pages/Regulamin";


const App = () => {
  return (
    <HashRouter>
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
      <Route path="/CALENDAR2" element={<Calendar2/>}/>
      <Route path="/CALENDAR3" element={<Calendar3/>}/>
      <Route path="/PROBLEMS" element={<PROBLEMS/>}/>
      <Route path="/NEWS" element={<NEWS/>}/>
      <Route path="/Bon" element={<Bon/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/CalendarEdit" element={<CalendarEdit/>}/>
      <Route path="/Regulamin" element={<Regulamin/>}/>
      </Routes>
    </HashRouter>
  );
}
export default App;
