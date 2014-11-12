'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-browserify');

    return {
        browserify: {
            dist: {
                '.build/main.js': [ 'public/js/app.jsx' ]
            },
            options: {
                transform: [ 'reactify' ],
                external: [ '_languagepack' ]
            }
        }
    };
};
