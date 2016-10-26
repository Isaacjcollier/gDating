// sample angular code

(function() {

  'use strict';

  angular
    .module('gDating', [
      'ngRoute',
      'gDating.config',
      'gDating.controller.user',
      'gDating.controller.login',
      'gDating.controller.home',
      'gDating.service.members'
    ]);

})();
