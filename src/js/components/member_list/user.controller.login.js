(function() {

  angular
    .module('gDating.controller.login', [])
    .controller('userLoginController', userLoginController);

  userLoginController.$inject = ['memberService'];

  function userLoginController(memberService) {
    const vm = this;

    vm.test = 'This is the user login controller';

    vm.register = function() {
      memberService.members()
      .then((member) => {
        vm.member = member.data.data;
      });
    };
  }

})();
