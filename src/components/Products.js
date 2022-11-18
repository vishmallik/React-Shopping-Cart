import React from "react";
import { connect } from "react-redux";
import OrderBy from "./OrderBy";

function Products(props) {
  return (
    <div>
      <div className="products-filter">
        <p>
          {`${props.products.length} Product${
            props.products.length > 1 ? "s" : ""
          } found.`}{" "}
        </p>
        <OrderBy />
      </div>
      <div className="flex wrap">
        {props.products.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div className="product-item">
      <div className="product-label">Free Shipping</div>
      <img
        className="product-item-img"
        src={`/static/products/${props.sku}_1.jpg`}
        alt={props.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{props.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {props.currencyFormat + props.price}
        </h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    selectedOrder: state.selectedOrder,
    products: state.products,
  };
}
export default connect(mapStateToProps)(Products);
