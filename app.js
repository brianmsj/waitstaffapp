angular.module('myApp',[])
.controller('main', function($scope) {
  var vm = this
  vm.price = 0;
  vm.taxrate = 0;
  vm.percentage = 0;
  vm.firstSubtotal = 0;
  vm.tiptotal = 0;
  vm.totalbill = 0;
  vm.customercount = 0;
  vm.totaltipsarray = []
  vm.totaltips = 0;
  vm.averagetips = 0;

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
    vm.totaltipsarray.push(vm.tiptotal)
  }
  vm.total = function() {
    vm.totalbill = parseInt(vm.firstSubtotal) + parseInt(vm.tiptotal)
    vm.totalbill = vm.totalbill.toFixed(2)
  }
  vm.addtips = function() {
    var results = []
    var totalaverage = 0
    for(let i=0;i<vm.totaltipsarray.length;i++) {
      var parsing = parseFloat(vm.totaltipsarray[i])
      results.push(parsing)
    }
    for(let j=0;j<results.length;j++) {
       totalaverage += results[j]
    }
    console.log(results)
    vm.totaltips = results.reduce((a, b) => a + b, 0).toFixed(2);
    vm.averagetips = totalaverage / results.length
    vm.averagetips = vm.averagetips.toFixed(2)
    console.log(vm.totaltips)
  }
  vm.cancel = function() {
    vm.price = 0;
    vm.taxrate = 0;
    vm.percentage = 0;
    vm.firstSubtotal = 0;
    vm.tiptotal = 0;
    vm.totalbill = 0;
  }
  vm.reset = function() {
    vm.price = 0;
    vm.taxrate = 0;
    vm.percentage = 0;
    vm.firstSubtotal = 0;
    vm.tiptotal = 0;
    vm.totalbill = 0;
    vm.customercount = 0;
    vm.totaltipsarray = []
    vm.totaltips = 0;
    vm.averagetips = 0;
  }
$scope.myForms = {};
    $scope.submit = function() {
        if($scope.myForms.meal.$valid) {
          console.log('fired')
          vm.subtotal()
          vm.tip()
          vm.total()
          vm.customercount++
          vm.addtips();
        }
        else {
          alert('form has errors')
        }
}


})
