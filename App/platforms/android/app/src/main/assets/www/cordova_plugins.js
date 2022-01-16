cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-android-restart.restartApp",
      "file": "plugins/cordova-plugin-android-restart/www/cordova-plugin-android-restart.js",
      "pluginId": "cordova-plugin-android-restart",
      "clobbers": [
        "navigator.app.restartApp"
      ]
    },
    {
      "id": "cordova-plugin-awesome-shared-preferences.SharedPreferences",
      "file": "plugins/cordova-plugin-awesome-shared-preferences/www/index.js",
      "pluginId": "cordova-plugin-awesome-shared-preferences",
      "clobbers": [
        "window.plugins.SharedPreferences"
      ]
    },
    {
      "id": "cordova-plugin-badge.Badge",
      "file": "plugins/cordova-plugin-badge/www/badge.js",
      "pluginId": "cordova-plugin-badge",
      "clobbers": [
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "cordova-plugin-ble-peripheral.blePeripheral",
      "file": "plugins/cordova-plugin-ble-peripheral/www/blePeripheral.js",
      "pluginId": "cordova-plugin-ble-peripheral",
      "clobbers": [
        "blePeripheral"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
      "pluginId": "cordova-plugin-local-notification",
      "clobbers": [
        "cordova.plugins.notification.local"
      ]
    },
    {
      "id": "cordova-plugin-qrscanner.QRScanner",
      "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
      "pluginId": "cordova-plugin-qrscanner",
      "clobbers": [
        "QRScanner"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-android-restart": "0.0.1",
    "cordova-plugin-awesome-shared-preferences": "0.1.0",
    "cordova-plugin-badge": "0.8.8",
    "cordova-plugin-ble-peripheral": "1.0.0",
    "cordova-plugin-browsersync-gen2": "1.1.7",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-local-notification": "0.9.0-beta.3",
    "cordova-plugin-qrscanner": "3.0.1",
    "cordova-plugin-whitelist": "1.3.5"
  };
});