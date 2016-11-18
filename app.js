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
