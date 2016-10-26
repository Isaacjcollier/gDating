(function() {

  angular
    .module('gDating.controller.login', [])
    .controller('userLoginController', userLoginController);

  userLoginController.$inject = [];

  function userLoginController() {
    const vm = this;

    vm.register ='This is the user login controller';
  }

})();
