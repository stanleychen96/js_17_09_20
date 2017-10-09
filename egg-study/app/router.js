'use strict';

module.exports = app => {

  // ------sign in------
  app.post('/user/signin', '');
  app.post('/user/setname', '');
  app.post('/user/setheadpicture', '');
  app.post('/mobile/set', '');


  // ------login and use-------
  app.post('/user/login', '');
  // app.post('/user/comment', '');


  // ------modify------
  app.post('/mobile/modify', '');


  // ************************ work **************************
  app.post('/work/userid', '');
  app.post('/work/url', '');

  // ------check------
  // app.post('/work/check', '');
  // app.post('/work/modify', '');
  app.post('/work/list', '');

  // ------vote------
  app.post('/work/vote', ''); // DDD
};
