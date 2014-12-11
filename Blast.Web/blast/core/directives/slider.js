var module = angular.module('blast.core.directives');

module.directive('slider', function ($timeout) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {

            // Initialize the slider plugin
            element.noUiSlider({
                start: ngModel.$viewValue,
                connect: "lower",
                range: {
                    'min': 0,
                    'max': 100
                }
            });

            // Watch for changes in controller
            scope.$watch(function () { return ngModel.$viewValue }, function (val) {
                element.val(val);
            });

            // Watch for slide event update the model
            element.on({
                change: function () {
                    ngModel.$setViewValue($(this).val());

                }
            })


        }
    };
});