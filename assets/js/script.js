let categories = [];
const fetchData = async function () {
  const url = 'http://127.0.0.1:8000/'
  await fetch(`${url}api/categories`, {
      headers: {
        'Authorization': 'Bearer ' + '1|1F0F9UxOBu5dILilAuAvtgAl7kE0MOHFnqOjEu5W'
      }
    }).then(response => {
      return response.json();
    })
    .then(response => {
      categories.push(response.data.data)
      console.log(categories[0])
    })
}

const fetchLoad = async (page) => {
  const url = `http://127.0.0.1:8000/`
  const token = `1|1F0F9UxOBu5dILilAuAvtgAl7kE0MOHFnqOjEu5W`
  await fetch(`${url}api/categories?page=${page}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    categories = [...categories[0], ...data.data.data]
    console.log(categories)
  })
}

fetchData();