import React from 'react'

export default function Nav({navDark}) {
  return (
   <>
   <nav className= {navDark}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Grocery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Mobiles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Fashion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Electronics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Personal care</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Appliances</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Furniture</a>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
   </>
  )
}
