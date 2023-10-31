export async function getApi() {
  const apiUrl = 'https://dummyjson.com/products/categories'
  const response = await fetch(apiUrl)
  const data = await response.json()
  const actualdata = data
return actualdata
}

// export async function getCategory(category) {
//   const secondUrl = `https://dummyjson.com/products/${category}/smartphones`
//   const response = await fetch(secondUrl)
//   const data = await response.json()
//   const myData = data.products
//   return myData
// }

    // fetching second Api

export async function getSecondApi() {
  const secondUrl = 'https://dummyjson.com/products?limit=0&skip=0&'
  const response = await fetch(secondUrl)
  const data = await response.json()
  const myData = data.products
  return myData
}