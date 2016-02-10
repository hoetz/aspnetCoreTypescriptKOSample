/// <reference path="../extdefinitions/tsd.d.ts" />
require.config({
    baseUrl: '/scripts/app',
    paths: {
        "jquery": "../../lib/jquery/jquery",
        "knockout": "../../lib/knockout/knockout-latest"
    },
    shim: {}
});
// load AMD module main.ts (compiled to main.js)
require(['main'], function (main) {
    var app = new main();
});
