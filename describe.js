import {navbar} from './main.js'
import {describtionApi, getApi, getCategory, getSecondApi} from './api.js'

// const dispNav = navbar()
// console.log(dispNav)

// const navDiv = document.querySelector('.nav-div')

// navDiv.innerHTML = dispNav
// const locationn = window.location.search

let  gottenData = await describtionApi()
console.log(gottenData)

const allproducts =  await getSecondApi(gottenData)

const apiGet = await getApi()

const idd = new URLSearchParams(document.location.search)
const getid = idd.get("id")
console.log(getid);

const val = await getCategory(getid).then((res)=>{
  const receiveval = res
  console.log(receiveval);
})


const lefSide = document.querySelector('.body-left')

 export function displayLeftSide() {
  gottenData.forEach(element => {
    if(getid == element.id){
      return lefSide.innerHTML = `<div class="img-div">
      <img id="image" src="${element.thumbnail}" alt="">
    </div>
    <div class="img-slide">
      <p id="arrow"> < </p>
      <div class="slide">
        <img id="slide-img" src="${element.images[0]}" alt="">
      </div>
      <div class="slide">
        <img id="slide-img" src="${element.images[1]}" alt="">
      </div>
      <div class="slide">
        <img id="slide-img" src="${element.images[2]}" alt="">
      </div>
      <div class="slide">
        <img id="slide-img" src="${element.images[3]}" alt="">
      </div>
      <p id="arrow"> > </p>
    </div>
      `
    }
  });
}

displayLeftSide()

const priceDiv = document.querySelector('.price-div')

export function displayPrice() {
  gottenData.forEach(element =>{
    if(getid == element.id){
      return priceDiv.innerHTML = `<div class="price">
      <h4 class="h4">$${element.price}</h4>
      <p class="pr">$71.56</p>
    </div>
    <div class="rate-rev">
      <div class="rate">
        <div class="star">
          <img src="./public/starr.png" alt="">
          <p id="rating">${element.rating}</p>
        </div>
        <div class="mssg">
          <img src="./public/message.png" alt="">
          <p id="mssg">67 reviews</p>
        </div>
      </div>
      <div class="percent">
        <p id="cent">${element.stock}%</p>
        <p id="of">of buyers have recommended this</p>
      </div>
    </div>
      `
    }
  })
}
displayPrice()

const about = document.querySelector('.about')
export function displayInfo() {
  gottenData.forEach(element => {
    if(getid == element.id){
      return about.innerHTML = `<div class="prod-des">
      <h4 class="tell">Product Description</h4>
      <p id="des">${element.description}</p>
    </div>
    <div class="prod-ben">
      <h4 class="tell">Benefits</h4>
      <div class="tic-des">
        <p id="tic">✔</p>
        <p id="des">Durable leather is easily cleanable so you can keep your look fresh.</p>
      </div>
      <div class="tic-des">
        <p id="tic">✔</p>
        <p id="des">Water-repellent finish and internal membrane help keep your feet dry.</p>
      </div>
      <div class="tic-des">
        <p id="tic">✔</p>
        <p id="des">Toe piece with star pattern adds durability.</p>
      </div>
      <div class="tic-des">
        <p id="tic">✔</p>
        <p id="des">Synthetic insulation helps keep you warm.</p>
      </div>
    </div>
    <div class="prod-det">
      <h4 class="tell">Product Details</h4>
      <div class="tic-det">
        <p id="tic">✔</p>
        <p id="des">Not intended for use as Personal Protective Equipment (PPE)</p>
      </div>
      <div class="tic-det">
        <p id="tic">✔</p>
        <p id="des">Water-repellent finish and internal membrane help keep your feet dry.</p>
      </div>
    </div>
    <div class="mor-det">
      <h4 class="tell">More Details</h4>
      <div class="tic-mor">
        <p id="tic">✔</p>
        <p id="des">Water-repellent finish and internal membrane help keep your feet dry.</p>
      </div>
      <div class="tic-mor">
        <p id="tic">✔</p>
        <p id="des">Water-repellent finish and internal membrane help keep your feet dry.</p>
      </div>
      <div class="tic-mor">
        <p id="tic">✔</p>
        <p id="des">Water-repellent finish and internal membrane help keep your feet dry.</p>
      </div>
    </div>
    <div class="similar">
      <h3 class="tel">Similar Items You Might Also Like</h3>
    </div>
      `
    }
  })
}
displayInfo()

const simCat = document.querySelector('.display-product')
export function displaySimcat() {
  return simCat.innerHTML = `
  <div class="product-div">
  <div class="img-name">
    <a href="./describe.html?id="><div class="prod-img">
      <img id="product-img" src="" alt="">
    </div></a>
      <div class="name-price">
        <p class="prod-name"></p>
        <h5 class="prod-price">₹</h5>             
      </div>
  </div>
  <div class="stars">
    <p class="types-of">5 types of shoos available</p>
    <div class="starr">
      <div class="sstar">
        <img src="./public/Star icon.png" alt="">
        <img src="./public/Star icon.png" alt="">
        <img src="./public/Star icon.png" alt="">
        <img src="./public/Star icon.png" alt="">
        <img src="./public/halfStar icon.png" alt="">
      </div>
      <p id="one21">(121)</p>
    </div>
  </div>
</div>
  `
}
displaySimcat()

// const addtocard = document.querySelector("#butt-right");

// addtocard.addEventListener("click", (e) => {
//   val
//  let addedProduts = JSON.parse(localStorage.getItem("addedcards")) || []
//     addedProduts.push(receiveval)
//     console.log(addedProduts);
//   localStorage.setItem("addedcards",JSON.stringify(addedProduts))
//   itemselectedbasket.innerHTML = addedProduts.length-1
//   alert("added");
// });