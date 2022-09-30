import React, { useEffect } from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import {Routes,Route,Link} from "react-router-dom"
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch=useDispatch()

  useEffect(()=>{

    dispatch({type:"FETCH_PRODUCTS_START"})
    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>{
      dispatch({type:"FETCH_PRODUCTS_SUCCESS",payload:res.data})
      console.log("data",res.data);
    })
    .catch((err)=>{
      dispatch({type:"FETCH_PRODUCTS_ERROR",payload:"PRODUCT STATE ERROR"})
    })
  },[])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:productID" element={<ProductPage/>}/>       
      </Routes>
    </div>
  );
}

export default App;
