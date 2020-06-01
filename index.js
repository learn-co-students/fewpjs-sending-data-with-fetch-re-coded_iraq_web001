// Add your code here

function submitData (userName, userEmail) {
  const body = document.querySelector('body')
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
  .then((response) => response.json())
  .then((object) => {
    document.body.innerHTML = object['id']
  })
  .catch((error) => {
    document.body.innerHTML = error.message
  })
}
