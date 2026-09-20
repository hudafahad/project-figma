import React from 'react'
function ProductsCard(props) {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={props.Image}
        alt={props.name}
      />

      <div className="product-info">
        <p className="product-id">{props.ID}</p>
        <h3>{props.name}</h3>
        <p>{props.price} </p>
      </div>
    </div>
  );
}

export default ProductsCard;