const body = document.getElementsByTagName('body');
// const name = document.getElementById('dogName').value;
// const email = document.getElementById('dogBreed').value;

function submitData(usersName, usersEmail){
  let formData = {
    name: usersName,
    email: usersEmail
};
 
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object['id'];
  })
  .catch(function(error) {
    document.body.innerHTML = error.message;
  });

}
