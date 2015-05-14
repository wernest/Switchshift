# Ruby Setup

1. Install the latest Ruby
  * RVM is good for this if you are on a Mac
  * on a windows just download Ruby and install it
2. Install Bundler -- Bundler is used by rails apps to manage dependencies.
  * to install: `sudo gem install bundler`  (gem is a tool that comes with ruby that helps install ruby tools/plugins)
3. Install Bower -- Bower is a tool for managing web dependencies, like Angular.  To install with npm, use `sudo npm install bower -g`
  * Bower and Bundler do almost the same thing, but Bundler is ruby specific, so I'm electing to use Bower for the web stuff and Bundler for the ruby stuff.  This way, if we ever replace the backend ruby with a different solution, we can keep our Bower setup.

# Application Setup

2. Clone this repo
3. Open a terminal in the project directory
4. `bundle install` to install all the rails/ruby project dependencies, including Rails itself
1. `rake db:migrate` to set up the db (you will need to run this anytime the db changes)
6. `rake bower:install` to install the web dependencies, like Angular and Bootstrap

# Running

From the project directory run `rails server` to start the server

Then open a browser and go to `localhost:3000`

# Dev Notes

## Project structure
The project is split into two parts.  Firs is all the Ruby On Rails stuff. The
intention is to mainly use the Rails portion as the api to the database.  Most
of the magic happens in the AngularJS code.  Where possible I'm trying to manage
the AngularJS and dependencies using bower.  I'm hopeful that if I ever decide
to move away from rails, this will make it as seamless as possible.

### Rails structure
As of now, Rails provides two functions.  The first is access to the database.
To provide this, rails is simply an API of REST endpoints.  They handle the
CRUD operations that the main client portion of the application needs.  I imagine
there will be more complex server side functionality as the project grows, but
for now it's very simplistic.

The other important thing that the Rails stuff provides is the authentication
piece.  For this I'm using Devise and Omniauth.  Devise is just a gem that makes
it easy to do authentication.  Omniauth is a gem that helps you do things like
twitter/google/facebook/etc sign in.

### Angularjs structure
This code is found in the /app/javascripts/angular folder.  I'm trying to follow
the guidelines of the Angular Seed project.
(https://github.com/angular/angular-seed)  It's changed in the last six months
and is a worth a look.

Additionally, I'm using bower to manage dependencies.  In rails, there's a bower
gem that helps this.  The bower file looks the same, but is executed through
`rake` rather than the normal way.  My hope is that if I someday decide to change
backends, this will be easy to rip out.
