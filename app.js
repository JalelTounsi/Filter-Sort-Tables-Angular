// app.js
angular.module('sortApp', [])
.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortIt  = false;  // set the default sort order
  $scope.searchTerm   = '';     // set the default search/filter term

  $scope.people = [{
  name: 'Jalel',
  age: '31',
  hobbies: ['Crossfit', 'Video Games', 'Sport', 'Cryptography', 'Astronomy']
  }, {
  name: 'Meriem',
  age: '23',
  hobbies: ['Sport', 'Hiking', 'Drawing', 'Cycling']
  }, {
  name: 'Alice',
  age: '25',
  hobbies: ['Board games', 'Cooking', 'Fashion']
  }, {
  name: 'Rich',
  age: '28',
  hobbies: ['Sport', 'Basketball', 'Ice skating']
  }];
});
