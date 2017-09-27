angular.module('myApp',[])
.controller('main', function($scope) {
  var vm = this
  vm.price = 0;
  vm.taxrate = 0;
  vm.percentage = 0;
  vm.firstSubtotal = 0;

  vm.subtotal = function() {
    var totalPercentage = vm.taxrate / 100 + 1
    vm.firstSubtotal = vm.price * totalPercentage
    vm.firstSubtotal = vm.firstSubtotal.toFixed(2)
  }

$scope.myForms = {};
    $scope.submit = function() {
        if($scope.myForms.meal.$valid) {
          console.log('fired')
          vm.subtotal()
        }
        else {
          alert('form has errors')
        }
}


})
