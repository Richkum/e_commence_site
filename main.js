// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'


const navDiv = document.querySelector(".nav-div")
export function navbar () {
   return navDiv.innerHTML += ` <nav class="nav">
  <div class="left-nav">
    <h1 class="h1">FashionHub</h1>
    <div class="nav-txt">
    <select name="categorie" id="categorie">
    <option id="option" value="option">Categorie</option>
  </select>
      <p>Brand</p>
      <p>Contact</p>
      <p>FAQ's</p>
    </div>
  </div>
  <div class="right-nav">
    <button id="bag-btn">
      <span id="item-num">3</span>
      <i class="fa-solid fa-bag-shopping"></i>
    </button>
    <button id="bell-btn">
      <span id="bells"></span>
      <i class="fa-regular fa-bell"></i>
    </button>
    <div class="first-img">
      <div id="img1">
        <!-- <img id="img1" src="https://media.istockphoto.com/id/1400052942/photo/young-stylish-mixed-race-woman-with-curly-natural-afro-hair-wearing-trendy-sunglasses-and.jpg?s=2048x2048&w=is&k=20&c=yYozLD_Umo_QBixtrynd1kr2dIUoTIFBi5tURT6mg3Y=" alt=""> -->
      </div>
      <div class="img-text">
        <p class="gm">Good Morning</p>
        <p class="sj">Scarlet Johnson</p>
      </div>
    </div>
  </div>
</nav>
`
}
navbar () 

const secDiv = document.querySelector('.second-div')
export function mainImg() {
  return secDiv.innerHTML +=`
  <div class="grab">
  <div class="grab-text">
    <h3 class="h3">Grab Upto 50% Off On Selected Headphone</h3>
  </div>
  <button id="buy-now">Buy Now</button>
</div>
<div class="over-img">
  <img id="over-img" src="./public/My project 1.png" alt="">
</div>
  ` 
}
mainImg()

const secondNav = document.querySelector('.nav-two')
export function description() {
  return secondNav.innerHTML = `
  <nav class="nav2">
  <select name="select" id="select">
    <option id="headphone" value="headphone">Headphone type</option>
  </select>
  <select name="select" id="select">
    <option id="price" value="price">Price</option>
  </select>
  <select name="select" id="select">
    <option id="review" value="review">Review</option>
  </select>
  <select name="select" id="select">
    <option id="color" value="Hcolor">Color</option>
  </select>   
  <select name="select" id="select">
    <option id="material" value="material">Material</option>
  </select>  
  <select name="select" id="select">
    <option id="offer" value="offer">Offer</option>
  </select>
</nav>
<nav class="head-nav">
  <select name="select1" id="select1">
    <option id="headphone1" value="headphone1">Headphone type</option>
  </select>
</nav>
  `
}
description()

const dispProduct = document.querySelector('.display-products')
export function displayProduct() {
  return dispProduct.innerHTML =`
  <div class="product-div">
  <div class="img-name">
    <div class="prod-img">
      <img id="product-img" src="./public/My project (1) 1.png" alt="">
    </div>
      <div class="name-price">
        <p class="prod-name">TDX Sinkers</p>
        <h5 class="prod-price">₹ 675.00</h5>             
      </div>
  </div>
  <div class="stars">
    <p class="types-of">5 types of shoos available</p>
    <div class="star">
      <img src="./public/Star icon.png" alt="">
      <img src="./public/Star icon.png" alt="">
      <img src="./public/Star icon.png" alt="">
      <img src="./public/Star icon.png" alt="">
      <img src="./public/halfStar icon.png" alt="">
    </div>
  </div>
  <div class="buttons">
    <button id="add-chart">Add To Chart</button>
    <button id="add-list">Add Shortlist</button>
  </div>
</div>
  `
}
displayProduct()






document.querySelector('#app').innerHTML 

// setupCounter(document.querySelector('#counter'))
