(function (){
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('FoodController', FoodController);
    
    FoodController.$inject = ['$scope'];
    function FoodController ($scope) {
        $scope.message = "";
        $scope.lunchMenu = "";
        
        $scope.displayMessage = function () {
            $scope.message = generateMessage($scope.lunchMenu);
        };
        
        function generateMessage (string) {
            var result = "";
            
            var numberOfItems = string.split(',')
                                .filter(notEmptyOrSpace)
                                .length;
            if (numberOfItems > 3) {
                result = "Too much!";
            } else if (numberOfItems == 0) {
                result = "Please enter data first";
            } else {
                result = "Enjoy!";
            };
            
            return result;
        };
        
        function notEmptyOrSpace(string) {
            return /\S/.test(string);    
        };
    };
    
})();