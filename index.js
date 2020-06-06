// Add your code here
function submitData (userName, userEmail)
{
  let configObj = {
    method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
  name:userName,
  email:userEmail
  })
};
  return fetch('http://localhost:3000/users',configObj)
  .then(resp=>{ return resp.json()})
  .then (resp=> {
    document.body.innerHTML=resp['id'];
  })
  .catch ( err=> { 
    const p=document.createElement('p');
    p.innerHTML=err.message
    document.body.appendChild(p);
    console.log(err.message);
  })
}