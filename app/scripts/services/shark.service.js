
(function() {
    'use strict';

    angular
        .module('cheapsharkApp')
        .factory('sharkService', sharkService);

    sharkService.$inject = ['$http', '$q'];

    function sharkService($http, $q) {

        return {
            getAll: function () {
                var defer = $q.defer();

                $http
                    .get("https://www.cheapshark.com/api/1.0/deals")
                    .then(function (response) {
                        console.log(response);
                        defer.resolve(response.data);
                    }, function (error) {
                        defer.reject(error.status);
                    });
                return defer.promise;
            }
        };
    }
})();
