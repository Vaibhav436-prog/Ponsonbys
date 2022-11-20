import React, { useState, useReducer, useEffect } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import reducer from "./reducers/reducer";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [navDark, setNavDark] = useState("navbar navbar-expand-lg bg-light");
  const [productStyle, setProductStyle] = useState({
    color: "black",
    backgroundColor: "#f5f1f1",
    boxShadow: "0px 0px 15px black",
  });
  const [theme, setTheme] = useState("light-mode");
  const [text, setText] = useState(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>);
  const handleMode = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
      setText(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
    </svg>);
      setProductStyle({
        color: "white",
        backgroundColor: "#3f3f3f",
        boxShadow: "blue",
      });
      setNavDark("navbar navbar-expand-lg bg-dark navbar-dark");
    } else {
      setTheme("light-mode");
      setText(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg>);
      setProductStyle({
        color: "black",
        backgroundColor: "#f5f1f1",
        boxShadow: "0px 0px 15px black",
      });
      setNavDark("navbar navbar-expand-lg bg-light");
    }
  };

  //cart work is here--

  const [vProduct, setVProduct] = useState({
    display: 'block'
  })
  const [cartStyle, setCartStyle] = useState({
    display: 'none',
  })
  const handleCart = () =>{
  if(vProduct.display === 'block'){
    setCartStyle({
      display: 'block'
    })
    setVProduct({
      display: 'none'
    })
  }
  else{
    setCartStyle({
      display: 'none'
    })
    setVProduct({
      display: 'block'
    })
  }
}
 
  const initialState = {
    loading: false,
    productLoading: false,
    product: [],
    cart: [],
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const url = `https://dummyjson.com/products/?limit=21`;
  const getData = async () => {
    dispatch({ type: "LOADING" });
    const resp = await fetch(url);
    const data = await resp.json();
    dispatch({ type: "DISPLAY_PRODUCTS", payload: data.products });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  if (state.loading) {
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
    <React.Fragment>
      <div className={theme}>
        <Navbar state={state} mode={handleMode} text={text} handleCart={handleCart}/>
        <Nav navDark={navDark} dispatch={dispatch} mode={handleMode} text={text}/>
        <main>
         <div className="productAddress" style={vProduct}> <Product
            state={state}
            dispatch={dispatch}
            theme={theme}
            productStyle={productStyle}
          /></div>
<div className="cartAddress" style={cartStyle}>
  <Cart state={state} dispatch={dispatch} />
</div>
<marquee direction="left" width="100%" className="my-4">
      <strong>&copy; Ponsonbys</strong> 2022. All Rights Reserved.
</marquee>
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
