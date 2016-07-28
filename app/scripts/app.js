(function(){
    'use strict';

    /**
     * @ngdoc overview
     * @name cheapsharkApp
     * @description
     * # cheapsharkApp
     *
     * Main module of the application.
     */
    angular
        .module('cheapsharkApp', [
            'angular-loading-bar',
            'ui.router',
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngTouch'
        ])
        .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home',{
                    url:'/home',
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs:'sharkVm'
                });

            $urlRouterProvider.otherwise('/home');
        }]);




})();

