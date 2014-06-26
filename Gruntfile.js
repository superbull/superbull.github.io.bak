/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n' +
              ' * Webtool v<%= pkg.version %> by SSMR RM\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' *\n' +
              ' * Designed and built with all the love in the world by Deng Zhi Cheng.\n' +
              ' */\n',

    less: {
      compileCore: {
        options: {
          strictMath: true,
          outputSourceFiles: true
        },
        files: {
          'css/main.css': 'less/main.less'
        }
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      core: {
        files: {
          'css/main.min.css': 'css/main.css'
        }
      }
    },

    watch: {
      less: {
        files: 'less/**/*.less',
        tasks: ['less', 'cssmin']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};