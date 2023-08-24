import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/home";
import Header from "./Components/Header";
import Add from "./Components/Add";
import View from "./Components/View";
import Edit from "./Components/Edit";
import Product from "./Components/Product";
import AddtoCart from "./Components/AddtoCart";
import Gita from "./Components/Gita/Gita";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/view" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
           <Route path="/product" element={<Product />} />
           <Route path="/gita" element={<Gita />} />
            <Route path="/addtocart" element={<AddtoCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
