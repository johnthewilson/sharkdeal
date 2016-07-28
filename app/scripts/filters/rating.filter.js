/**
 * Created by johnwilson on 7/28/16.
 */
/**
 * Created by johnwilson on 3/14/16.
 */

(function() {
    'use strict';
    angular
        .module('cheapsharkApp')
        .filter('rating', ratingFn);

    ratingFn.$inject = [];
    function ratingFn (val) {
        return function (deal) {
            console.log('runcing');
            switch (val) {
                case 100:
                    return deal.metacriticScore > 90 ;
                default:
                    console.log('default');
            }
        };
    }
})();
