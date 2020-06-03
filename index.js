// Add your code here
let url = 'http://localhost:3000/users';
function submitData (userName, userEmail) {
  const body = document.getElementsByTagName('body')[0];
    let person = {
      name: userName,
      email: userEmail
    };
    let configObj = {


    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(person),
    method : 'POST'
  };

  return fetch(url ,  configObj)
.then(response=> response.json())
.then(
user => {
  body.innerHTML =  user.id;}
  /* end of second then*/)
  .catch(
    err => {
       body.innerHTML =  err.message;
    }
  )


/* end of function*/}
