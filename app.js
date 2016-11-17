angular.module('todosApp',[])
.service('contactsService', function(){
    var t = this
    t.contacts = [
      { title: 'Waravut Worabut', done: false},
      { title: 'Weera Kasetsin', done: true}
    ]
    t.list = function(){
      return t.contacts
    }
  })

  .controller('ListContactController', function ($scope, contactService) {
   $scope.contacts = contactsService.list()
   $scope.newContacts = {
     Checkbox: '',
     title: '',
     done: ''
   };

   $scope.save = function (){
    var contact = new Contact();
    contact.Checkbox = $scope.newContact.Checkbox;
    contact.Title = $scope.newContact.Title;
    contact.Done = $scope.newContact.Done;

    $scope.contacts.push(contact);

    $scope.newContact.Checkbox= '';
    $scope.newContact.Title = '';
    $scope.newContact.Done = '';
  };


  function Contact(){
      this.Checkbox = '';
      this.Title= '';
      this.Done = '';
    };

});
