import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="carde  ">
      <div className="h-72 w-72 bg-white btn rounded-sm">
        {/* <div className="h-5 log w-5 rounded-full bg-slate-800 "></div> */}
        <img src={product.image} alt={product.title} className="card-img" />
      </div>
      <div className="card-body">
        <h3 className="card-title line-clamp-2 ">{product.title}</h3>
        <p className="card-description line-clamp-2 text-gray-900">
          {product.description}
        </p>
        <p className="card-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
