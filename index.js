// Add your code here
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function (response) {
//   //  console.log(response.json());
//     return response.json();
//   }
//   )
//   .then(function(object) {
//     // console.log(object);
//     document.write(object.id)
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

  // Add your code here

  function submitData(user_name,user_email){
    let user = {
      name: user_name,
      email:user_email
    };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    };

    return fetch("http://localhost:3000/users", configObj)
      .then(function (response) {
        return response.json()}
      )
    .then(function(object) {
      console.log(object);
        document.body.innerHTML = (object.id);

      })
      .catch(function(error) {
        //  let message = 'Unauthorized Access';
          document.body.innerHTML=`${error.message}`;


      });

  }
 
