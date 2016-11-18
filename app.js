angular.module('todosApp',[])
.service('contactsService', function(){
    var self = this
    self.contacts = [
      { title: 'Waravut Worabut', done: false},
      { title: 'kitsana waiyakun', done: true}
    ]
    self.list = function(){
      return self.contacts
    }
    self.add = function (contact) {
  		self.contacts.push(contact)
  	}
  })

  .controller('listcontact', function ($scope, contactsService) {
   $scope.contacts = contactsService.list()

})
.controller('addtodos', function ($scope, contactsService) {
 $scope.save = function () {
   if( $scope.newtodos != undefined && $scope.newtodos != ""){
     var contact = {
       title : $scope.newtodos,
       done : false
     }
     contactsService.add(contact)
     reset()
   }
 }
 function reset(){
   $scope.newtodos = undefined
   }
});
