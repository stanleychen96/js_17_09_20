'use strict';

module.exports = app => {

  app.post('/m.g', 'work.get');
  app.post('/m.c', 'work.create');
  app.post('/m.u', 'work.update');
  app.post('/m.d', 'work.delete');
  app.post('/m.s', 'work.select');

  app.post('/after', 'lodash.after');

};
