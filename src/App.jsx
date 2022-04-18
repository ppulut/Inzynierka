import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Register" element={<Register/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;