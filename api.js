const apiUrl = 'https://dummyjson.com/products'

async function getApi() {
  const response = await fetch(apiUrl)
  const data = await response.json()
  console.log(data);
}

getApi()