import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Link  to="/" className="" style={{textDecoration: 'none'}}>
        <h1 className="text-center text-danger header fixed-top border">Shopping</h1>
        </Link>
      
    </div>
  );
};
export default Header;
