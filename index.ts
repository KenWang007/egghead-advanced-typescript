const enum MediaTypes {
  JSON = "application/json"
}

fetch("https://swapi.co/api/people/1/", {
  headers: {
      Accept: MediaTypes.JSON
  }
})
.then((res) => res.json())
.then(response => {
 console.log(response.name)
});
