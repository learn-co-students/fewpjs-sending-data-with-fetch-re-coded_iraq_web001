// Add your code here


let body = document.getElementsByTagName("body")[0];
function submitData(name,email){

let data = {
  name:name,
  email:email
};

let configurationObject = {

  method : 'POST',
  headers : { 'content-type':'application/json' , 'Accept':'application/json'},
  body : JSON.stringify(data)

}
return fetch ('http://localhost:3000/users',configurationObject)
.then(resp=> resp.json())
.then(resp => {

  body.innerHTML = `${resp.id}`;
}).catch( error=> {

body.innerHTML = `${error.message}`;
})



}
