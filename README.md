# ChangeRequestApp

# This Project is developed using below tech stack:

-Angular
-Postgres DB
-Bootstrap
-Media Queries

# Project has below major pieces:

-app-common: A common module having components/code blocks, functions, services which can be reused across various modules.

-components: A feature module having all reusable components of the application.

-modules: Majorly consists of views in the application. Some of them belong to global app.module as they are supposed to be globally accessible to other views e.g. Login. On other hand there are some independent modules like admin.module which has their own child routes. These modules are configured as being lazy loaded.

-Http.intercepter: A request intercepter which would append the authentication token for every outgoing request.

-Auth.guard: A route guard to protect unauthorized access.

-API.proxy: A proxy service to make http calls.

# Unit Testing

Basic unit test cases have been written in Karma and Jasmine for change-request module. To execute them please run 'ng test'.

# Responsiveness

For UI responsiveness Bootstrap has been used along with media queries.

# Code Quality

To maintain code quality, a gated check in process has been set up which runs 'ng lint --fix' command which would make sure that commit could only happen if linting has been done in code, linting makes sure all the recommended best parctices are followed in code. For setting this up, a package has been used called 'Husky' which would leverage pre commit hooks in git to perform gated check in.
