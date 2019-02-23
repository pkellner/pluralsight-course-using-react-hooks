# pluralsight-course-using-react-hooks
The master branch here is the latest updates to the Pluralsight course published by Peter Kellner in xxx of yyy in the master branch

# Course Code for [Using React Hooks](https://app.pluralsight.com/library/courses/using-react-hooks) on Pluralsight

***EVERYTHING BELOW THIS IS OUT OF DATE AND NEEDS UPDATING***

This GitHub repo includes the final code for all the modules in the course that develop code. 
....odules 1,4 and 7 do not have any code associated with them.

Before you start, you should install node on either your Windows or Mac computer (those are the two environments that are tested). Below, in
"Getting Started" are the basics to get module 6 up and running as fast as possible.

## Getting Started
1. **Install [Node 10.1.0 with NPM 5.6](https://nodejs.org)**. 
2. **Clone this repository.** - `git clone https://github.com/pkellner/pluralsight-course-react-aspnet-core` or [download the zip](https://github.com/pkellner/pluralsight-course-react-aspnet-core/archive/master.zip)
3. **Set your default directory to which module you want (example: cd m6-add-rest-data-to-server-side-rendering - `cd m6-add-rest-data-to-server-side-rendering`
4. **Install Node Packages with Dependencies.** - `npm install`
5. **Run the web app - `npm start` 
Assuming you are in the m6-add-rest-data-to-server-side-rendering directory, this will launch the webpack-dev-server and put you in a browser window running the completed app.

## Module Details

To run each of these scripts, cd into the appropriate direct ( example: `m2-custom-webpack` ) 

then run the script name as follows:

`npm run start-dev`



### Module 2 - Building a Custom Webpack Configuration for React and Core

You can follow the progression of each section in this module by looking at soure code section by section.

See the /Progressions directory in the base of this repo for more details.

Details of each script in package.json are as follows:

| Script Name   	| Script Description  	
|---	|---	|
| start-dev   	| Launches webpack-dev-server to run browser  	|
| dev:build-server   	| Builds the server side rendering react code  	|
| dev:build-client   	| Builds the server side rendering react code  	|
| dev:server   	| Runs the server side rendering code with node  	|
| dev:all   	| Builds client and server javascript and launches node   	|
| cleanwwwroot   	| removes all files from the ASP.NET Core wwwroot directory  	|
| copytowwwroot   	| Copies all files from the build directory to the root of the ASP.NET Core app (/wwwroot) 	|


### Module 3 - Integrating Facebook’s create-react-app with ASP.NET Core

Details of each script in package.json are as follows:

| Script Name   	| Script Description  	
|---	|---	|
| start-js   	| Normal start but does not build SASS to CSS  	|
| start   	| Includes building SASS files and running the React app  	|
| build   	| Builds the production ready JavaScript bundle  	|
| test   	| Runs all tests in the project (we did not cover this in the course)  	|
| build-css   	| Compiles the SASS files into CSS  	|
| watch-css   	| Monitors SASS files for changes and then builds new CSS  	|
| eject   	| Removes Webconfig management. Expert feature only, copies all configuration files to root of project 	|


### Module 5 - Use REST Services from React to ASP.NET Core Endpoints

You can follow the progression of each section in this module by looking at soure code section by section.

See the /Progressions directory in the base of this repo for more details.

This module brings a newly configured ASP.NET Core server that started with an empty server.
It ultimately creates a stand alone REST server that uses Entity Frameworks in memory database to supply data.
The data comes from the real Silicon Valley Code Camp 2017 speaker and session data.  Those JSON files 
representing that data are embedded as resources and loaded into Entity Framework when there are no other
records in the database.

| Script Name   	| Script Description  	
|---	|---	|
| start   	| Runs the webpack-dev-server and the json-server for REST data locally  	|
| start:devplus   	| same as start but let's you run it explicitly and not by default  	|
| start:dev   	| Just runs webpack-dev-server by itself  	|
| dev:build-server   	| Builds the server side rendering react code  	|
| dev:build-client   	| Builds the server side rendering react code  	|
| dev:server   	| Runs the server side rendering code with node  	|
| dev:all   	| Builds client and server javascript and launches node   	|
| cleanwwwroot   	| removes all files from the ASP.NET Core wwwroot directory  	|
| copytowwwroot   	| Copies all files from the build directory to the root of the ASP.NET Core app (/wwwroot) 	|
| json-server   	| Launches json-server by itself running with a Node Express server in code	|


### Module 6 - Implementing Server Side Rendering That Includes REST Calls
(very similar scripts to module 5, just the code changes to support REST in html)

You can follow the progression of each section in this module by looking at soure code section by section.

See the /Progressions directory in the base of this repo for more details.

| Script Name   	| Script Description  	
|---	|---	|
| webpackdev:server   	| Runs the webpack-dev-server only  	|
| start   	| Runs webpack-dev-server and the json-server	|
| start:devplus 	| runs in parallel start:dev and json-server  	|
| start:dev 	| same as webpackdev:server  	|
| dev:build-server   	| Builds the server side rendering react code  	|
| dev:build-client   	| Builds the server side rendering react code  	|
| dev:server   	| Runs the server side rendering code with node  	|
| dev:all   	| Builds client and server javascript and launches node   	|
| cleanwwwroot   	| removes all files from the ASP.NET Core wwwroot directory  	|
| copytowwwroot   	| Copies all files from the build directory to the root of the ASP.NET Core app (/wwwroot) 	|
| json-server   	| Launches json-server by itself running with a Node Express server in code	|

You can follow the progression of each section in this module by looking at soure code section by section.

See the /Progressions directory in the base of this repo for more details.


## Configuration File (.env)

In modules 5 and 6, we introduce a configuration file (.env) that let's you specify whether our running in development or production.
It also let's you set the base URL for the REST endpoint to pick up speakers and sessions.

The two choices for NODE_ENV are development or production.  When set to development, the URL is retrieved from the corresponding environment variable `JSONSERVER_RESTURL` and when in production `PROD_RESTURL`.

By default, they are set to `http://svcc-react1.azurewebsites.net/rest` which happens to be the same ASP.NET Core web site used also in modules 5 and 6 (source code in ../WebApp).

You can see that data actually downloaded by hitting `http://svcc-react1.azurewebsites.net/rest/speakers` and `http://svcc-react1.azurewebsites.net/rest/sessions`.








