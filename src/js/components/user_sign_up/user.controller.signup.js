(function() {

  angular
    .module('gDating.controller.user', [])
    .controller('userSignUpController', userSignUpController);

  userSignUpController.$inject = [];

  function userSignUpController() {
    this.test = 'Testing 1 2';
  }

})();
