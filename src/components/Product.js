import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


const Product = () => {
  const params = useParams();

 
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productID}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log("TEK PRO ÇEKİMİNDE ERROR", err));
  }, []);
 
  return (
    <div className="my-5 ">
      <div
        className="d-flex justify-content-center align-items-center"
       
      >
        {
          <div
            className="card d-flex flex-row text-center border-0 bodycomponent"
            style={{ width: "56rem" }}
          >
            <div>
              <img
                src={product.image}
                style={{ width: "18rem" }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h1 className="card-title">{product.title}</h1>
              <p className="card-text">{product.description}</p>
              <h4>{product.category}</h4>
              <h3>{product.price} $</h3>
            </div>
          </div>
        }
      </div>
      <div className="text-center my-5">
      <Link  to="/" className="btn btn-primary mx-3">
        HOME
      </Link>
      <Link  to="/" className="btn btn-success mx-3">
        ADD TO CART
      </Link>
      </div>
      
    </div>
  );
};
export default Product;
