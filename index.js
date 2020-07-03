function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( res ) {
      return res.json()
    } )
    .then( function ( obj ) {
      document.getElementById('container').innerHTML = obj[ "id" ]
    } )
    .catch( function ( err ) {
      document.getElementById('container').innerHTML = err.message
    } )
}