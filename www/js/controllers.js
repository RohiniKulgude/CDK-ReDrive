angular.module('app.controllers', [])

  .controller('loginCtrl', ['$scope', '$state', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $state, $stateParams) {

      $scope.login = function () {
        if ($scope.role == "dealer") {
          $state.go('d_Menu.home');
        } else {
          $state.go('menu.customer_Home');
        }

      }


    }])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Mazda", "BMW", "Volvo", "Audi", "Jeep"],
      datasets: [{
        label: '% of Likes',
        data: [20, 15, 25, 30, 10],
        backgroundColor: [
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
        ],
        borderWidth: 0
      }]
    },
	options: {
      title: {
        display: true,
        text: 'Percentage of Likes Received'
      }
    }

  });
  /*
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});*/
/*
  function fixCharts() {
    var chart=null; var elt = null;
      chart = myChart;
      //chart should have already been created behind the scenes - if animation mode, call the below after animation complete
      //Now get the canvas wrapper div, get the canvas image chart as a Base64Image, then rewrite the contents of the wrapper DIV to remove the canvas
      elt = $('#' + __allChartCanvasId[i]); //jquery syntax
      elt.parent().html('<img style="max-height:100%;height:auto;width:100%;max-width:100%;margin:auto;display:inline;" src="' + chart.toBase64Image() + '" />');
  }
  setTimeout("fixCharts();",500); //allow some time after chart creation to get the base64 images */

}])
   
.controller('inventoryCtrl', ['$scope','$http','$state', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$http,$state, $stateParams) {
  $scope.load = function () {

    $http.get("/json/vehicles.json")
      .then(function successCallback(response){
        console.log(response.data);
        $scope.cars = response.data;
      }, function errorCallback(response){
        console.log("Unable to perform get request");
      });
  }

  $scope.goToDetails = function (c) {
    $state.go("d_Menu.vehicleDetails",{car: c});
  }

}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('d_MenuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

   
.controller('signupCtrl', ['$scope', '$state', 'addUserService', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, addUserService, $stateParams) {
  $scope.signup = function() {
    var userCredentials = {};
    userCredentials.name = $scope.user.name;
    userCredentials.id = $scope.user.email;
    userCredentials.password = $scope.user.password;
    userCredentials.role = $scope.role;
    console.log("Signing in..");
    var userAdded = addUserService.addUserinfo(userCredentials);

      if (userCredentials.role == "dealer") {
        $state.go('settings');
      } else {
        $state.go('d_Menu.home');
      }
    if (window.sessionStorage) {
      // localStorage supported
      console.log("sessionStorae supported");
    }

  }

}])
   
.controller('D_aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

  .controller('vehicleDetailsCtrl', ['$scope','$state', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope,$state, $stateParams) {
      $scope.c = $stateParams.car;
      $scope.photos  = $scope.c.photos;

      $scope.getHistory = function (history) {
        $state.go("d_Menu.serviceHistory",{history: history});
      }
    }])
   
.controller('serviceHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.hist = $stateParams.history;

}])
   
.controller('uploadVehicleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.isVinAvailable = function (vin) {
    if(vin == "1C3"){
      return true;
    } else {
      return false;
    }
  }

  $scope.showImage=false;

  //Function to capture image
  $scope.captureImage = function() {
    $scope.showImage=true;
    if(navigator.camera){
      navigator.camera.getPicture(this.onSuccess, this.onFail, { quality: 25,
        destinationType: Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum:true
      });
    }
    else{
      alert("camera not found");

    }
  };

  $scope.newImage = function() {
    $scope.showImage=false;
  };

  $scope.onSuccess=function(imageUri) {

    $scope.showImage=true;
    var image = document.getElementById('capturedImage');
    image.src =imageUri;
  }

  $scope.onFail=function (message) {
    alert('Failed because: ' + message);
  }
}])
   
.controller('reDriveCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

  .controller('customer_HomeCtrl', ['$scope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $stateParams) {
     /*var cardTypes = [
    /   { image: 'https://amp.businessinsider.com/images/56c8b512dd0895906d8b467a-750-527.jpg', title: 'So much grass #hippster'},
        { image: 'https://cms.kelleybluebookimages.com/content/dam/kbb-editorial/make/lamborghini/lamborghini-other/2019-lambo-urus/01-2019-lamborghini-urus-oem.jpg', title: 'Way too much Sand, right?'},
        { image: 'https://www.bajajallianz.com/Corp/images/Car-Insurance-Banner.jpg', title: 'Beautiful sky from wherever'},
        { image: 'https://file.kbb.com/kbb/vehicleimage/housenew/480x360/2015/2015-audi-a4-frontside_aua4sed151.jpg', title: 'Awesome vehicle!'},
        { image: 'https://st.motortrend.com/uploads/sites/10/2015/11/2005-bmw-x5-3.0-i-suv-angular-front.png', title: 'Nice car!'},
        { image: 'https://media.ed.edmunds-media.com/volvo/s60/2016/fe/2016_volvo_s60_f34_fe_216161_717.jpg', title: 'Good Vehicle'},
        { image: 'https://www.bajajallianz.com/Corp/images/Car-Insurance-Banner.jpg', title: 'Last Vehicle'},
      ];

*/
      $scope.cards = [];
      $scope.addCard = function(i) {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
      }

     // for(var i = 0; i < 7; i++) $scope.addCard();
      $http.get("/json/vehicles.json")
        .then(function successCallback(response){
          console.log(response.data);
          $scope.cards = response.data;
        }, function errorCallback(response){
          console.log("Unable to perform get request");
        });

      $scope.cardSwipedLeft = function(index) {
        console.log('Left swipe');
      }

      $scope.cardSwipedRight = function(index) {
        console.log('Right swipe');
      }

      $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
      }


    }])

  .controller('likedCarsCtrl', ['$scope', '$http','$state','$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope,$http,$state,$stateParams) {

      $scope.load = function () {

        $http.get("/json/likedCars.json")
          .then(function successCallback(response){
            console.log("in Load function");
            console.log(response.data);
            $scope.cars = response.data;
          }, function errorCallback(response){
            console.log("Unable to perform get request");
          });
      }

      $scope.goToDetails = function (c) {
        $state.go("menu.liked_Car_Details",{car: c});
      }

    }])

  .controller('preferencesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('liked_Car_DetailsCtrl', ['$scope','$state','$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $state, $stateParams) {

      $scope.c = $stateParams.car;
      console.log("in next page");
      console.log($scope.c);
      $scope.photos  = $scope.c.photos;

      $scope.getHistory = function (history) {

        $state.go("menu.buyer_car_serv_history",{history: history});
      }

    }])

  .controller('buyer_car_serv_historyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {

      $scope.hist = $stateParams.history;
    }])

