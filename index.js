// Add your code here
function submitData(userName,email){
 let body=document.querySelector('body');
let info = {
  name:userName,
  email:email
};

let configurationObj = {

  method : 'POST',
  headers : { 'content-type':'application/json' , 'Accept':'application/json'},
  body : JSON.stringify(info)

}
return fetch ('http://localhost:3000/users',configurationObj)
.then(res=> res.json())
.then(res => {

  body.innerHTML = res.id;
}).catch( error=> {

body.innerHTML = error.message;
})
}