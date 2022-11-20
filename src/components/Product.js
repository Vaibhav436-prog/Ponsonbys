import React, { useState } from "react";

const Product = ({ state, dispatch, productStyle }) => {
  const { product, cart } = state;
  const myStyle = {
    color: "white",
    backgroundColor: "grey",
    boxShadow: "0px 0px 3px red",
  };
  // const [mystyle, setMystyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   boxShadow: '0px 0px 15px black'
  // })
  if (state.productLoading) {
    return (
      <div className="loading">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <section className="product-section">
      <div className="product-title">
        <h2>Products</h2>
      </div>
      <div className="products-center">
        {product.map((item) => {
          const { id, thumbnail, title, price } = item;
          // const [mytitle, setMytitle] = useState(title)
          // if(title.length < 17){
          //   setMytitle()
          // }
          return (
            <div className="product" key={id} style={productStyle}>
              <div className="img">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="product-footer">
                <div className="product-footer-details">
                  <h6>{title.length < 17? title:title.slice(0, 16)+'...'}<span class="tooltiptext">{title}</span></h6>
                  <b>$ {price}</b>
                </div>
                {cart.some((item) => item.id === id) ? (
                  <div className="product-btn">
                    <button
                      className="btn"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: id,
                        });
                      }}
                    >
                      Remove from Cart
                    </button>
                  </div>
                ) : (
                  <div className="product-btn">
                    <button
                      className="btn"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: { id, thumbnail, title, price },
                        });
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
