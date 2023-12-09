import { Route, Routes } from "react-router-dom";
// import About from "./Components/About";
// import Counter from "./Components/Counter";
// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
// import Slide from "./Components/Slide";
// import Products from "./Components/Products";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreNav from "./Project Components/PreNav";



function App() {
  return (
    <>
    {/* <Navbar/>
    {/* <Counter/>
    <Slide/> 
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<Products/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes> */}
    <PreNav/>

    <ToastContainer />
    </>
    
  );
}

export default App;
