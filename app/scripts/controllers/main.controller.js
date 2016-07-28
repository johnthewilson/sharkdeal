(function() {
    'use strict';

    angular
        .module('cheapsharkApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['sharkService', '$timeout'];

    function MainCtrl(sharkService,$timeout) {
        var sharkVm = this;
        sharkVm.deals = [];
        sharkVm.exists = {};
        sharkVm.existsvalues = [];
        sharkVm.rating = rating; //function to partition the Data
        sharkVm.hideIfNull = hideIfNull; // hide the Headings if not entries present
        init();
        //hideIfNull();

        function rating(val) {
            return function (deal) {
                var exists = deal.metacriticScore > (val-10) && deal.metacriticScore < val;
                if(exists){
                  sharkVm.exists[val] =  true;
                  return exists;
                }
                return exists;
            };
        }

        function init() {
            sharkService
                .getAll()
                .then(function (data) {
                    sharkVm.deals = data;
                    console.log(data);
                }, function (error) {
                    console.log(error);
                });
        }

        function hideIfNull(val ){
            return  $timeout(function(){
                return (sharkVm.exists[val] !== undefined) ? true : false
            }, 2000);
        }
    }
})();
