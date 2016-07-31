dir = File.expand_path(File.dirname(__FILE__))

# Project root path
project_path = File.join(dir, '..', '..', '..')

# Load the Compass-recipes
require 'compass-recipes'

# Compass configurations
public_path = File.join('public', 'stylesheets')
sass_path = dir
css_dir = File.join(public_path)
images_dir = File.join(public_path, '..', 'images')
relative_assets = true

# Require any additional compass plugins here.
output_style = :compressed
environment = :production

# Load the sass-bootstrap
#import_path = File.join(dir, '..', '..', 'bower_components')
#add_import_path(File.join(import_path, 'bootstrap-sass-official', 'vendor', 'assets', 'stylesheets'))
#add_import_path(File.join(import_path, 'font-awesome', 'scss'))
#add_import_path(File.join(import_path, 'icomoon-sass', 'assets', 'scss'))