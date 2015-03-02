'use strict';
console.log("Up and running");

window.addEventListener('load', function(){
    var app = angular.module('Ducked', []);

    var html = document.querySelector('html');
    html.setAttribute('ng-app', '');
    html.setAttribute('ng-csp', '');

    angular.bootstrap(html, ['Ducked'], []);
});
