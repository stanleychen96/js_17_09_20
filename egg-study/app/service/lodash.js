'use strict';

const _ = require('lodash');
module.exports = app => {
  class Lodash extends app.Service {
    * after() {
      const saves = [ 'profile', 'settings' ];

      const done = _.after(saves.length, function() {
        console.log('done saving!');
      });

      _.forEach(saves, function(type) {
        asyncSave({ 'type': type, 'complete': done });
      });
    }
  }
  return Lodash;

};
