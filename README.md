# Setup

1. Install the latest Ruby
2. Install the latest Rails
3. Clone this repo

# Running
Open a terminal in the project directory and type:
1. `rake db:migrate` to set up the db (you only need to run this the first time,
or when the db changes)
2. `rails server` to start the server

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
