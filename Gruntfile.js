module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                //define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['app/scripts/**/*.js'],
                //the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                // the banner in inserted at the top of the input
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'app/scripts/**/*.js', 'app/test/**/*.js'],
            //configure JSHint:
            options: {
                globals: {
                    jQuery: true,
                    $: true,
                    console: true
                }
            }
        },
        watch: {
            all: {
                options: {
                    livereload: true
                },
                files: ['<%= jshint.files %>', 'app/styles/**/*.css', 'app/*.html', 'app/render/**/*.js'],
                tasks: ['jshint'],
            },
            jst: {
                files: [
                    'app/scripts/templates/*.ejs'
                ],
                tasks: ['jst']
            },
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            }
        },
        jst: {
            compile: {
                files: {
                    'app/render/templates.js': ['app/scripts/templates/*.ejs']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jst');

    grunt.registerTask('createDefaultTemplate', function() {
        grunt.file.write('app/render/templates.js', 'this.JST = this.JST || {};');
    });

    grunt.registerTask('test', ['jshint', 'createDefaultTemplate', 'jst']);

    grunt.registerTask('default', ['jshint', 'createDefaultTemplate', 'jst', 'concat', 'uglify', 'watch']);
};