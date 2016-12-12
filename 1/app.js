(function (){
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
        $scope.name = "";
        $scope.numericValue = 0;
        
        $scope.displayStringNumericValue = function () {
            $scope.numericValue = calculateStringNumericValue($scope.name);
        };
        
        function calculateStringNumericValue (string) {
            var numericValue = 0;
            for (var i = 0; i < string.length; i++) {
                numericValue += string.charCodeAt(i);
            };
            $scope.debugNumericValue = "calculateNumericValue";
            return numericValue;
        };
    });
    
})();