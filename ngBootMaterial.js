'use strict';

angular.module('ngBootMaterial', [])
    .directive('materialInputFix', function() {
        return {
            restrict: 'A',
            link: function(elem, attr, tr) {
                $.material.input(elem[0]);
            }
        };
    }).directive('materialRippleFix', function() {
        return {
                restrict: 'A',
                link: function(elem, attr, tr) {
                    $.material.ripples(elem[0]);
            }
        };
    }).directive('materialCheckboxFix', function() {
        return {
            restrict: 'A',
            link: function(elem, attr, tr) {
                $.material.checkbox(elem[0]);
            }
        };
    }).directive('materialRadioFix', function() {
        return {
            restrict: 'A',
            link: function(elem, attr, tr) {
                $.material.radio(elem[0]);
            }
        };
    });
