// Before running your app, you can do this in console,
//
// export NODE_ENV=production
// Or if you are in windows you could try this:
//
// SET NODE_ENV=production
// or you can run your app like this:
//
// NODE_ENV=production node app.js
// You can also set it in your js file:
//
// process.env.NODE_ENV = 'production';

module.exports = function isWin32() {
  return process.platform === 'win32';
};
