cordova.define("cordova-plugin-android-restart.restartApp", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = function(error) {
    exec(null, error, 'RestartApp', 'restartApp', []);
};

});
