angular.module("app")
.service("swapiservice", function($http) {

  //console.log("it works");
  var service = this
  var namesArray = [];

  this.getAllPeople = function() {
    console.log("getAllPeople cleared")
    var arr = []
    for (var i = 0; i < 9; i++) {
      arr.push(this.getPeople(i + 1))
    }
    return Promise.all(arr)
  }
  this.getPeople = function(page) {
    console.log("Should display 9 arrays")
    return $http.get('http://swapi.co/api/people/?page=' + page)
    .then(function(response) {
      var results = response.data.results;
      return results
    })
  }
  ////end
})
