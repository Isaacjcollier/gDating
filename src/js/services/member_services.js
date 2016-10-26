(function() {

  angular
    .module('gDating.service.members', [])
    .service('memberService', memberService);

  memberService.$inject = ['$http'];

  function memberService($http) {
    this.sanity = 'yo';

    this.members = function(limit) {
      return $http.get('http://galvanize-student-apis.herokuapp.com/gdating/members?limit=50');
    };

  }

}());

/*

$ curl http://galvanize-student-apis.herokuapp.com/gdating/members/
:::each object is this:::

{
  "data":{
    "_id":"5810d7abfff5051100cee950"
    "username":"asl;djfasljkhdflaskhdfaslkhdf"
    "dob":"1990-02-20T07:00:00.000Z"
    "password":"$2a$10$/aMonQfENoOPMpBJGljNoO21GKmXOulJqNk0Q2RqQU4K/pEbOe/3q"
    "description":"asdfjhaskldjfhaslfkjh"
    "email":"ashdkfalksjhf@fasdlfjhas.com"
    "phone":"1234567890"
    "slug":"asl;djfasljkhdflaskhdfaslkhdfaslkjdhfaskdjfhasdjfh"
    "__v":0
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
