## Lesson 2
**Make first, simple react application, correctly building and working on webpack-dev-server or as a static page**

1. Install needed libraries using command `npm install --save` and all libraries needed for building or running
in development mode `npm install --save-dev`. This will create new sections in `package.json` file. In `dependencies`
are all application libraries. In `devDependencies` everything else.

2. To create commands for running specific functionality use section `scripts` in `package.json`. By default script
with name `start` is starting application. In our application I use `build` for building JavaScript bundle file.
In this file, in production mode, should be only needed libraries. Second script `dev` runs development environment,
together with server, which serves application and reloads page after every saved change. Very helpful.

3. For building or running dev server webpack needs configuration file, called `webpack.conf.js`. Webpack will read
files defined in `entry`, and will save it in path defined in `output`. In `module` => `rules` should be information
about which files should be taken for build, which loader and presets should be used.

4. For running dev server, in `webpack.config.js` should be section `devServer` defined with information where is main
static file located and what is main address of serving. Options for defining dev server is many, but not every is
needed to make it work.

5. Application files are located in `app` directory. Main file is called `index.js`. react components are located in
`components` directory

