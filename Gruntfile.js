
module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    markdown: {
      all: {
        files: [
          {
            expand: true,
            src: 'src/*.md',
            dest: 'html/',
            ext: '.html'
          }
        ], // files
        options: {
          template: 'src/assets/templates/resume.html',
          markdownOptions: {
            gfm: true,
            highlight: 'manual',
          } // markdownOptions
        } // options
      } // all
    }, // markdown
    watch: {
      markdown: {
        files:['src/*.md', 'src/assets/templates/resume.html'],
        tasks:['markdown'],
        options: {
          livereload: true,
        }
      }
    }, // watch
    connect: {
      server: {
          options: {
            port: 8000,
            base: 'html'
          }
      } // server
    } // connect
  }); // grunt.initConfig()

  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
}
