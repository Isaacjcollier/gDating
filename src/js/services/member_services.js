(function() {

  angular
    .module('gDating.service.members', [])
    .service('memberService', memberService);

  memberService.$inject = ['$http'];

  function memberService($http) {
    const vm = this;

    vm.individualMember = {}

    vm.selectMember = function(member) {
      vm.individualMember.singleMember = member;
      console.log(vm.individualMember.singleMember);
      return vm.individualMember.singleMember
    }

    vm.members = function() {
      return $http.get('http://galvanize-student-apis.herokuapp.com/gdating/members/?limit=25');
    };

  }

}());

/*

$ curl http://galvanize-student-apis.herokuapp.com/gdating/members/
:::each object is vm:::

{
  "data":{
    "_id":"5810d7abfff5051100cee950"
    "password":"$2a$10$/aMonQfENoOPMpBJGljNoO21GKmXOulJqNk0Q2RqQU4K/pEbOe/3q"
    "slug":"asl;djfasljkhdflaskhdfaslkhdfaslkjdhfaskdjfhasdjfh"

    "description":"asdfjhaskldjfhaslfkjh"
    "email":"ashdkfalksjhf@fasdlfjhas.com"
    "phone":"1234567890"

    "_matches":[]
    "interestedIn":[0,1,2,3]
    "gender":0
    "address":{"geo":{"lat":100,"lng":50}}
    "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg"
    "names":{"firstName":"Aslkjdfhasldkjfhasldkf"
    "lastName":"Alskdjhfalskdjfaslkdhf"}
    "admin":false
    "active":true
  }
}

*/
