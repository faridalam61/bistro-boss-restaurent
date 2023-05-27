import React from "react";

function ProductCard({ item }) {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{name}</h2>
        <p>{recipe}</p>
        <p className="text-xl font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
