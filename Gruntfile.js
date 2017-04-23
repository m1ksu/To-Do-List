module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pug: {
            compile: {
                options: {
                    pretty: false
                },

                files: {
                    'build/index.html': ['src/index.pug']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'build/style.css': 'src/style.sass'
                }
            }
        },

        watch: {
            pug: {
                files: ['src/index.pug'],
                tasks: ['pug']
            },
            sass: {
                files: ['src/style.sass'],
                tasks: ['sass']
            }
        },

        autoprefixer: {
            your_target: {
                files: {
                    'build/style.css': 'build/style.css'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};