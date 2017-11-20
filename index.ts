const enum MediaTypes {
  JSON = "application/json"
}

// Endpoint updated to for valid response
fetch("https://swapi.co/api/people/1/", {
  headers: {
      Accept: MediaTypes.JSON
  }
})
.then((res) => res.json())
.then(response => {
// console.log added to show example working
 console.log(response.name)
});
