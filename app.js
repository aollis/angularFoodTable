angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchGuitar   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.guitars = [
    { name: 'PRS', type: 'Electric', price: 2000 },
    { name: 'Fender', type: 'Electric', price: 4000 },
    { name: 'Gibson', type: 'Acoustic', price: 7000 },
    { name: 'Ibanez', type: 'Electric', price: 6000 }
  ];
  
});