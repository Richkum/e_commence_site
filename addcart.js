import {navbar} from './main.js'

// const ourNav = navbar()
// console.log(ourNav)

// const navDiv = document.querySelector('.nav-div')

// navDiv.innerHTML = dispNav

let cart = []

function displayCart(){

  let i = 0
  const textt = document.querySelector('.here')
if(cart.length == 0) {
  textt.textContent = 'No item Added yet'
}
}
displayCart()