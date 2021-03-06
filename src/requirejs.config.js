(function() {
    'use strict';

    var root = this;

    root.require.config({
        baseUrl: 'src',

        /* starting point for application */
        deps: ['backbone.marionette', 'bootstrap', 'marionette.handlebars'],

        shim: {
            backbone: {
                deps: [
                    'underscore',
                    'jquery'
                ],
                exports: 'Backbone'
            },
            libcoverage: {
                deps: ['backbone']
                /*,
                exports: 'WCS'*/
            },
            filesaver: {
                exports: 'saveAs'
            },
            lm: {
                exports: 'lm'
            },
            timeslider: {
                deps: ['d3']
            },
            timeslider_plugins: {
                deps: ['timeslider', 'libcoverage']
            }
        },

        paths: {
            contrib: 'contrib',
            core: 'core',
            requirejs: '../bower_components/requirejs/require',
            jquery: '../bower_components/jquery/jquery.min',
            jqueryui: '../bower_components/jquery-ui/ui/minified/jquery-ui.min',
            backbone: '../bower_components/backbone-amd/backbone-min',
            underscore: '../bower_components/underscore-amd/underscore-min',
            d3: '../bower_components/d3/d3',
            timeslider: '../bower_components/d3.TimeSlider/d3.timeslider.min',
            timeslider_plugins: '../bower_components/d3.TimeSlider/d3.timeslider.plugins.min',
            libcoverage: '../bower_components/libcoverage/libcoverage.min',
            filesaver: '../bower_components/filesaver/FileSaver',
            lm: '../bower_components/lm.js/lm',
            analytics: '../bower_components/analyticsviewer/lib/scripts/analytics.min',
            nv: '../bower_components/nvd3/nv.d3.min',

            /* alias all marionette libs */
            'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette.min',
            'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr.min',
            'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter.min',

            /* alias the bootstrap js lib */
            bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',

            /* Alias text.js for template loading and shortcut the templates dir to tmpl */
            text: '../bower_components/requirejs-text/text',
            tmpl: '../templates',

            /* handlebars from the require handlerbars plugin below */
            handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

            /* require handlebars plugin - Alex Sexton */
            i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
            json2: '../bower_components/require-handlebars-plugin/hbs/json2',
            hbs: '../bower_components/require-handlebars-plugin/hbs',

            /* marionette and handlebars plugin */
            'marionette.handlebars': '../bower_components/backbone.marionette.handlebars/backbone.marionette.handlebars.min',

            'openlayers': 'http://openlayers.org/api/OpenLayers',
            //'openlayers': 'http://ol3js.org/en/master/build/ol',

            /* 3D viewer modules base libraries */
            virtualglobeviewer: '../bower_components/virtualglobeviewer/src',
            x3dom: '../scripts/vendor/x3dom-full.debug',
            keypress: '../bower_components/Keypress/keypress',
            xtk: '../scripts/vendor/xtk_edge',
            'xtk-gui': '../scripts/vendor/xtk_xdat.gui'
        },

        hbs: {
            disableI18n: true
        }
    });
}).call(this);