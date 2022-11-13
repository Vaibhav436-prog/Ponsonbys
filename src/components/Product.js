import React, {useState} from "react";

const Product = ({ state, dispatch, productStyle }) => {
  const { product, cart } = state;
  const myStyle = {
    color: 'white',
    backgroundColor: 'grey',
    boxShadow: '0px 0px 3px red'
  }
  // const [mystyle, setMystyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   boxShadow: '0px 0px 15px black'
  // })

  return (
    <section className="product-section">
      <div className="product-title">
        <h2>Products</h2>
      </div>
      <div className="products-center">
        {product.map((item) => {
          const { id, thumbnail, title, price } = item;
          return (
            <div className="product" key={id} style={productStyle}>
              <div className="img">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="product-footer">
                <div className="product-footer-details">
                  <span>{title}</span>
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
