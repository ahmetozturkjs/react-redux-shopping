import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const navigate=useNavigate()
  const params=useParams()
  // const [products, setProducts] = useState(null);

  const {productsState}=useSelector(state=>state)

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       setProducts(res.data);
  //     })
  //     .catch((err) => console.log(err, "PRODUCT GET ERROR"));
  // }, []);
  
  if (productsState.success !== true) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  const calıstır=(id)=>{
    console.log("asdr");
    navigate(`/product/${id}`)
  }
  console.log("asd",productsState.products);
  return (
    <div className="d-flex cardmaindiv justify-content-center align-items-center bodycomponent">
      {productsState.products.map((pro) => {
        return (
          <div onClick={()=>calıstır(pro.id)}  style={{textDecoration: 'none',width: "18rem",color:"#505015"}} key={pro.id}  className="p-3 card carddiv d-flex text-center m-4 border-0 shadow">
            <img src={pro.image} style={{width:"16rem",height:"18rem"}} className="card-img-top img-fluid mx-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title sinir" style={{height:"3rem"}}>{pro.title}</h5>
              <h5>{pro.price} $</h5>
              <h6>{pro.category}</h6>
              <p className="card-text sinir" style={{height:"3rem"}}>
               {pro.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsList;
