angular.module('app.services', [])

.factory('addUserService', ['$http',function($http, $scope, $q){
var addUserService = {
  addUserinfo: function(userData){
    var employees = {};
    var id = userData.id;
    //console.log(employees);
    var result = {
        "password" : userData.password,
        "name" : userData.name,
        "username" : userData.id
    };
/*
    $http.get("http://100.126.49.32:8080/dealers/")
      .then(function successCallback(response){

        console.log(response);
      }, function errorCallback(response){
        console.log("Unable to perform get request");
      });

    $http.post("http://100.126.49.32:8080/create/", result)
      .then(function successCallback(response){
        console.log("Successfully POST-ed data");
      }, function errorCallback(response){
        console.log("POST-ing of data failed");
      });
    /*
    $http.get('./json/b_auth.json').success(function (data){
      employees = data;
      console.log(employees);
    });
    usersOnline = 15;
    console.log(usersOnline);
    $http.post("./json/b_auth.json",result).success(function(response) {
      console.log(response);
     // $scope.usersData = response.users;
    });
    */
  }
};
return addUserService
}])

.factory('BlankFactory', [function(){

}]);
