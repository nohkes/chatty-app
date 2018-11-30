React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3009
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into Tip: Use this as your sandbox and feel free to add new features and requirements for practice.

the build folder you can access it using `http://localhost:3009/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* UUID
* Websockets

### Screenshots
https://github.com/nohkes/chatty-app/blob/master/Screenshot%20from%202018-11-28%2015-09-59.png
https://github.com/nohkes/chatty-app/blob/master/Screenshot%20from%202018-11-28%2015-11-25.png
https://github.com/nohkes/chatty-app/blob/master/Screenshot%20from%202018-11-28%2015-14-00.png
