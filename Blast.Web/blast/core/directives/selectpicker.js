var module = angular.module('blast.core.directives');

module.directive('selectPicker', function ($timeout) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {

            //scope.$on('rendered', function () {

                element.selectpicker({
                    iconBase: 'fa',
                    tickIcon: 'fa-check'
                });
            //});


            scope.$watch(function () { return ctrl.$modelValue }, function (val) {

                element.selectpicker('val', val);
                element.selectpicker('refresh');
            });
        }
    };
});