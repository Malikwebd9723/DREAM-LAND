import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sell from "./components/Sell"
import FindProperty from "./components/FindProperty"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Error from "./components/Error";
import PropertyState from "./context/PropertyState";


function App() {
  return (
    <>
    <PropertyState>
      <Navbar/>
      <Routes>
      <Route exact path ="/" element = {<Home/>}/>
      <Route exact path ="/sellforme" element = {<Sell/>}/>
      <Route exact path ="/findroperty" element = {<FindProperty/>}/>
      <Route exact path ="/login" element = {<Login/>}/>
      <Route exact path ="/signup" element = {<Signup/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      </PropertyState>
    </>
  );
}

export default App;
