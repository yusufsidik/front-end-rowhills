const fetchData = async function () {
  const url = 'http://127.0.0.1:8000/'
  await fetch(`${url}api/products`, {
      headers: {
        'Authorization': 'Bearer ' + '1|1F0F9UxOBu5dILilAuAvtgAl7kE0MOHFnqOjEu5W'
      }
    }).then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response.data.data)
    })
}

fetchData();