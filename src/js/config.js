(function() {

  'use strict';

  angular
    .module('gDating.config', [])
    .config(gDatingConfig);

  function gDatingConfig($routeProvider) {
    $routeProvider
    .when('/sign-up', {
      templateUrl: 'js/components/user_sign_up/user.signup.html',
      controller: 'userSignUpController',
      controllerAs: 'userSignUpCtrl'
    })
    .when('/log-in', {
      templateUrl: 'js/components/user_log_in/user.login.html',
      controller: 'userLoginController',
      controllerAs: 'userLoginCtrl'
    })
    .when('/', {
      templateUrl: 'js/components/home_page/home.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }

})();
