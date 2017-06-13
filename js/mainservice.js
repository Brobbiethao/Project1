angular.module("app")
.service("swapiservice", function($http) {

  console.log("it works");
  var service = this
  var namesArray = [];

  this.getAllPeople = function() {
    console.log("getAllPeople cleared")
    var arr = []
    for (var i = 0; i < 9; i++) {
      arr.push(this.getPeople(i + 1))
    }
    return Promise.all(arr)
    .then(res => {
      var characters = _.flatten(res).map(function(cur){
        if(cur.name.indexOf(" ") !== -1){
          return Object.assign({imgurl: cur.name.split(" ").join("_")}, cur )
        }
        else {
          return Object.assign({imgurl: cur.name}, cur)
        }
      })
      service.characters = characters;
      return characters;
    })
  }
  this.getPeople = function(page) {
    console.log("Should display 9 arrays")
    return $http.get('http://swapi.co/api/people/?page=' + page)
    .then(function(response) {
      var results = response.data.results;
      return results
    })
  }
  this.getCharByName = function(name) {
    console.log(name)
    console.log(service.characters)
    return service.characters.find(function(char) {
      return char.name === name;
    })
  }
})
