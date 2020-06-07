// Add your code here
// Add your code here

function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  }

  return fetch("http://localhost:3000/users", configurationObject)
  .then(function(res) {
    return res.json();
  })
  .then(function(object) {
    document.body.innerHTML = object["id"]
  })
  .catch(function(error) {
    alert("Sorry, there was a problem!")
    console.log(error.message)
    document.body.innerHTML = error.message
  })
}
