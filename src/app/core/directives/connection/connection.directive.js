'use strict';

export default function (app) {

    app.directive('connection', connectionTestDirective);

    function connectionTestDirective () {
        'ngInject';
        
        return {
            restrict: 'A'
        }
    }
}