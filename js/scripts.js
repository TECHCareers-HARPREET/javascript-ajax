// Retrieving an external resource (live JSON data.)
fetch( "http://api.open-notify.org/astros.json" ) // Sends the request...
  // We can use .then() to parse the response.
  .then( response => {
      if ( response.status >= 200 && response.status <=299 )
      {//200 range status/ response codes are SUCCESSES.
          return response.json() // convert to JSON , and send to next step (.then())
      }
      else {
          //If it is another range, we are unsuccessful...
          throw Error( response.statusText);// Display a formal error message reporting the concern.
      }
   return response.json()
  })
//   DATA has been formatted, lets have a look inside...
  .then(data =>
    {
        console.log (data)
    })
