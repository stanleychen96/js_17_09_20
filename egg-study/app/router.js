'use strict';

module.exports = app => {

  app.post('/m.g', 'member.get');
  app.post('/m.c', 'member.create');
  app.post('/m.u', 'member.update');
  app.post('/m.d', 'member.delete');
  app.post('/m.s', 'member.select');
};
