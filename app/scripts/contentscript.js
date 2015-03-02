'use strict';
console.log("Up and running");

window.addEventListener('load', function(){
    var app = angular.module('Ducked', []);

    var html = document.querySelector('html');
    html.setAttribute('ng-app', '');
    html.setAttribute('ng-csp', '');

    var viewport = document.getElementById('viewport');
    viewport.setAttribute('ng-controller', 'MainController');
    app.controller('MainController', function($scope){
        console.log("Scoped")
    });

    var myDirective = document.createElement('div');
    myDirective.setAttribute('my-directive', '');
    viewport.appendChild(myDirective);

    app.directive('myDirective', function(){
        return {
            restrict: 'EA',
            replace: true,
            template: '<a href="https://duckduckgo.com/">DuckDuckGo Search</a>'
        };
    });

    angular.bootstrap(html, ['Ducked'], []);
});
