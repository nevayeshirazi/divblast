var module = angular.module('blast.core.directives');

// Messages for application wide validation error
var errorMessages = [
    { error: 'required', message: "This field cannot be empty." },
    { error: 'email', message: "Invalid email address" }
];

// Directive that applies necessery classes and adds error messages to element during validation. 
module.directive('inputValidate', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            scope.$watch(function () { return ctrl.$viewValue }, function (elemValue) {

                var isValid = eval(ctrl.$valid);

                if (ctrl.$dirty) {

                    var nextElem = $(element).next('span.help-block.has-error');

                    if (isValid) {

                        if (nextElem.length)
                            $(nextElem).remove();

                        //if (elemValue !== "")
                        //    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                        //else
                        //    $(element).closest('.form-group').removeClass('has-success').removeClass('has-error');

                    }
                    else if (!isValid) {

                            //$(element).closest('.form-group').removeClass('has-success').addClass('has-error');

                        var message = '';
                        var errorType = '';


                        if (ctrl.$error.required)
                            errorType = 'required';
                        else if (ctrl.$error.maxlength)
                            errorType = 'maxlength';
                        else if (ctrl.$error.url)
                            errorType = 'url';
                        else if (ctrl.$error.email)
                            errorType = 'email';
                        else if (ctrl.$error.mask)
                            errorType = 'mask';

                        message = $.grep(errorMessages, function (e) { return e.error === errorType })[0].message;


                        var errorTemplate = '<span class="help-block has-error ' + errorType + '">' + message + '</span>';

                        if (nextElem.length && !$(nextElem).hasClass(errorType)) {
                            $(nextElem).remove();
                            $(element).after('<span class="help-block has-error ' + errorType + '">' + message + '</span>');
                        }
                        else if (!nextElem.length) {
                            $(element).after('<span class="help-block has-error ' + errorType + '">' + message + '</span>');
                        }



                    }
                    else {
                        //$(element).closest('.form-group').removeClass('has-success').removeClass('has-error');
                    }
                }
            });
        }
    };
});

