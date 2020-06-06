// Add your code here
let data = {
name : "Steve",
email : "steve@steve.com"
};
let rando = Math.ceil( Math.random() * 1000 );
let config = {
  method:"POST",
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
    },
    body : JSON.stringify(data)
}
function submitData(name,email){
return fetch('http://localhost:3000/users',config)
.then(res=>res.json())
.then(object=>
document.body.innerHTML =(object["id"])
)
.catch(function(error){
 document.body.innerHTML=(error.message)
});
}

