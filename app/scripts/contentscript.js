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

    var input = document.getElementById('lst-ib');
    input.setAttribute('ng-model', 'search');
    //http://stackoverflow.com/questions/19469881/javascript-remove-all-event-listeners-of-specific-type
    var inputClone = input.cloneNode(true);
    input.parentNode.replaceChild(inputClone, input);
    //angular.element(input).off();
    angular.element(input).unbind();
/*
    angular.element(input)
        .on('keydown change paste',function(e){
            console.log(e)
            //e.preventDefault();
            e.stopPropagation();
        });
*/
    var myDirective = document.createElement('div');
    myDirective.setAttribute('my-directive', '');
    document.querySelector('.jsb center').appendChild(myDirective);
    //document.querySelector('.sblsbb').appendChild(myDirective);

    app.directive('myDirective', function($sce){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: $sce.trustAsResourceUrl(chrome.extension.getURL('/templates/button.html'))
        };
    });

    angular.bootstrap(html, ['Ducked'], []);
});
