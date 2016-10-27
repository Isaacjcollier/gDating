(function() {

  angular
    .module('gDating.controller.memberList', [])
    .controller('memberListController', memberListController);

  memberListController.$inject = ['memberService'];

  function memberListController(memberService) {
    const vm = this;

    vm.test = 'This is the user login controller';

    vm.register = function() {
      memberService.members()
      .then((member) => {
        vm.member = member.data.data;
      });
    };

    vm.selectMember = function(argument) {
      vm.singleMember =  memberService.selectMember(argument);
    }

  }

})();
