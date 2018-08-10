angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('d_Menu.home', {
        cache:false,
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

    .state('menu.customer_Home', {
      cache:false,
      url: '/c_page1',
      views: {
        'c_side-menu21': {
          templateUrl: 'templates/customer_Home.html',
          controller: 'customer_HomeCtrl'
        }
      }
    })

  .state('d_Menu.inventory', {
    cache:false,
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inventory.html',
        controller: 'inventoryCtrl'
      }
    }
  })

  .state('settings', {
    cache:false,
    url: '/page3',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('d_Menu', {
    cache:false,
    url: '/side-menu21',
    templateUrl: 'templates/d_Menu.html',
    controller: 'd_MenuCtrl'
  })

  .state('login', {
    cache:false,
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    cache:false,
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('d_Menu.about', {
    cache:false,
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('d_Menu.vehicleDetails', {
    cache:false,
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vehicleDetails.html',
        controller: 'vehicleDetailsCtrl'
      }
    },
    params : {
      car : null
    }
  })

  .state('d_Menu.serviceHistory', {
    cache:false,
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviceHistory.html',
        controller: 'serviceHistoryCtrl'
      }
    },
    params : {
      history : null
    }
  })

  .state('uploadVehicle', {
    cache:false,
    url: '/page9',
    templateUrl: 'templates/uploadVehicle.html',
    controller: 'uploadVehicleCtrl'
  })

  .state('reDrive', {
    url: '/page10',
    templateUrl: 'templates/reDrive.html',
    controller: 'reDriveCtrl'
  })

    .state('menu.likedCars', {
      cache:false,
      url: '/c_page2',
      views: {
        'c_side-menu21': {
          templateUrl: 'templates/likedCars.html',
          controller: 'likedCarsCtrl'
        }
      }
    })

    .state('preferences', {
      cache:false,
      url: '/c_page3',
      templateUrl: 'templates/preferences.html',
      controller: 'preferencesCtrl'
    })

    .state('menu', {
      cache:false,
      url: '/c_side-menu21',
      templateUrl: 'templates/menu.html',
      controller: 'menuCtrl'
    })

    .state('menu.profile', {
      cache:false,
      url: '/c_page4',
      views: {
        'c_side-menu21': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })

    .state('menu.about', {
      cache: false,
      url: '/c_page5',
      views: {
        'c_side-menu21': {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    })

    .state('menu.liked_Car_Details', {
      cache:false,
      url: '/c_page7',
      views: {
        'c_side-menu21': {
          templateUrl: 'templates/liked_Car_Details.html',
          controller: 'liked_Car_DetailsCtrl'
        }
      },
      params : {
        car : null
      }
    })

    .state('menu.buyer_car_serv_history', {
      cache:false,
      url: '/c_page8',
      views: {
        'c_side-menu21': {
          templateUrl: 'templates/buyer_car_serv_history.html',
          controller: 'buyer_car_serv_historyCtrl'
        }
      },
      params : {
        history : null
      }
    })

$urlRouterProvider.otherwise('/page4')


});
