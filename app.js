angular.module('myApp',[])
.controller('main', function($scope) {
  var vm = this
  vm.price = 0;
  vm.taxrate = 0;
  vm.percentage = 0;
  vm.firstSubtotal = 0;
  vm.tiptotal = 0;
  vm.totalbill = 0;

  vm.subtotal = function() {
    var totalPercentage = vm.taxrate / 100 + 1;
    vm.firstSubtotal = vm.price * totalPercentage;
    vm.firstSubtotal = vm.firstSubtotal.toFixed(2);
  }
  vm.tip = function() {
    var tipCalculation = vm.percentage / 100 + 1;
    vm.tiptotal = tipCalculation * vm.firstSubtotal;
    var parsed = parseInt(vm.firstSubtotal)
    vm.tiptotal = vm.tiptotal - parsed
    vm.tiptotal = vm.tiptotal.toFixed(2)
  }
  vm.total = function() {
    vm.totalbill = parseInt(vm.firstSubtotal) + parseInt(vm.tiptotal)
    vm.totalbill = vm.totalbill.toFixed(2)
  }

$scope.myForms = {};
    $scope.submit = function() {
        if($scope.myForms.meal.$valid) {
          console.log('fired')
          vm.subtotal()
          vm.tip()
          vm.total()
        }
        else {
          alert('form has errors')
        }
}


})
