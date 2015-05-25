 // Project configuration.
 module.exports = function(grunt) {
     grunt.initConfig({
         karma: {
             unit: {
                 configFile: 'karma.conf.js',
                 background: true,
                 singleRun: false,
                 tasks: ['karma:unit:run'] //NOTE the :run flag 
             }
         },
         watch: {
             karma: {
                 files: ['src/*.js', 'test/*.js'],
                 tasks: ['karma:unit:run'] //NOTE the :run flag 
             },
             scripts: {
                 files: ['src/*.js', 'test/*.js'],
                 tasks: ['complexity', 'karma'],
                 options: {
                     spawn: false,
                 },
                 interrupt: true,
                 debounceDelay: 1000
             },
         },
         complexity: {
             generic: {
                 src: ['src/*.js'],
                 // exclude: ['doNotTest.js'],
                 options: {
                     breakOnErrors: true,
                     // jsLintXML: 'report.xml', // create XML JSLint-like report
                     // checkstyleXML: 'checkstyle.xml', // create checkstyle report
                     // pmdXML: 'pmd.xml', // create pmd report
                     errorsOnly: false, // show only maintainability errors
                     cyclomatic: [3, 7, 12], // or optionally a single value, like 3
                     halstead: [8, 13, 20], // or optionally a single value, like 8
                     maintainability: 100,
                     hideComplexFunctions: false, // only display maintainability
                     broadcast: false // broadcast data over event-bus
                 }
             }
         }
     });

     grunt.loadNpmTasks('grunt-complexity');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-karma');
     grunt.registerTask('default', 'watch');
 };