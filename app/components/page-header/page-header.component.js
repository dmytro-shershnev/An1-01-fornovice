(function() {
    'use strict';

    angular
        .module('app')
        .component('pageHeader', {
            templateUrl: 'components/page-header/page-header.html',
            controllerAs: 'third',
            controller: 'Header'
        });
})();