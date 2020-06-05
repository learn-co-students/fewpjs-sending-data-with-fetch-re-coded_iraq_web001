// // Add your code here
// let formData = {
//   dogName: 'Boby',
//   dogBreed: 'sadfgs',
// };

// let configObj = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   body: JSON.stringify(formData),
// };

// function render(object) {
//   document.body.insertAdjacentHTML('beforebegin', `<p>${object.dogName}</p>`);
// }

// document.querySelector('button').addEventListener('click', () => {
//   fetch('http://localhost:3000/dogs', configObj)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       render(object);
//     })
//     .catch(function (error) {
//       alert('Bad things! Ragnarők!');
//       console.log(error.message);
//     });
// });

function submitData(name, email) {
  const newUser = {
    name,
    email,
  };
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = data.id;
      console.log(data.id);
    })
    .catch(error => {
      alert('stop stop stop');
      document.body.innerHTML = error.message;
      console.log(error.message);
    });
}

submitData('test', 'test.@test.com');
