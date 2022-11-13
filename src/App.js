import React, { useState, useReducer, useEffect } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import reducer from "./reducers/reducer";
import Nav from "./components/Nav";

const App = () => {
  const [navDark, setNavDark] = useState("navbar navbar-expand-lg bg-light");
  const [productStyle, setProductStyle] = useState({
    color: "black",
    backgroundColor: "#f5f1f1",
    boxShadow: "0px 0px 15px black",
  });
  const [theme, setTheme] = useState("light-mode");
  const [text, setText] = useState("Enable dark mode");
  const handleMode = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
      setText("Disable dark mode");
      setProductStyle({
        color: "white",
        backgroundColor: "#141d26",
        boxShadow: "blue",
      });
      setNavDark("navbar navbar-expand-lg bg-dark navbar-dark");
    } else {
      setTheme("light-mode");
      setText("Enable dark mode");
      setProductStyle({
        color: "black",
        backgroundColor: "#f5f1f1",
        boxShadow: "0px 0px 15px black",
      });
      setNavDark("navbar navbar-expand-lg bg-light");
    }
  };

  const initialState = {
    loading: false,
    product: [],
    cart: [],
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
// const [lim, setLim] = useState(25);
// const handleLimit = () =>{
// setLim(lim + 25)
// alert("hy")
// }
  const url =
    `https://dummyjson.com/products/category/womens-jewellery`;
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
        <Navbar state={state} mode={handleMode} text={text} />
        <Nav navDark={navDark}/>
        <main>
          <Product
            state={state}
            dispatch={dispatch}
            theme={theme}
            productStyle={productStyle}
          />
         <Cart state={state} dispatch={dispatch} />
        </main>
      </div>
    </React.Fragment>
  );
};

export default App;
