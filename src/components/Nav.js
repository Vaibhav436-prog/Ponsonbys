import React from "react";

export default function Nav({ navDark, dispatch, mode, text }) {
  const getData = async (category) => {
    dispatch({ type: "PRODUCT_LOADING" });
    if (category === "All") {
      const resp = await fetch(`https://dummyjson.com/products/?limit=40000000`);
      const data = await resp.json();
      dispatch({ type: "DISPLAY_PRODUCTS", payload: data.products });
      return;
    }
    const resp = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await resp.json();
    dispatch({ type: "DISPLAY_PRODUCTS", payload: data.products });
  };
  const handleClick = (category) => {
    getData(category);
  };

  return (
    <>
      <nav className={navDark}>
        <div class="container-fluid container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("All");
                  }}
                >
                  All
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("smartphones");
                  }}
                >
                  Smartphones
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("laptops");
                  }}
                >
                  Laptops
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("fragrances");
                  }}
                >
                  Fragrances
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("groceries");
                  }}
                >
                  Groceries
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("furniture");
                  }}
                >
                  Furniture
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("mens-watches");
                  }}
                >
                  Watches
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("motorcycle");
                  }}
                >
                  Motorcycle
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("sunglasses");
                  }}
                >
                  Sunglasses
                </a>
              </li>
            </ul>
            <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={mode}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{text}</label>
</div>
          </div>
        </div>
      </nav>
    </>
  );
}
