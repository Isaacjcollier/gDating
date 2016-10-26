(function() {

  angular
    .module('gDating.controller.home', [])
    .controller('homeController', homeController);

  homeController.$inject = [];

  function homeController() {
    this.test = 'this should be the home page';
  }

})();
