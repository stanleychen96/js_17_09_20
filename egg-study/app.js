'use strict';

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '111111',
    datebase: 'tryagain',
  },
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const start = new Date();
    const havesisters = yield app.mysql.query(knex.schema.hasTable('member').toString());
    if (havesisters.length === 0) {
      const userid = knex.schema.createTableIfNotExists('member', function(level) {
        level.increments();
        level.string('name').notNullable().defaultTo('');
        level.integer('age').notNullable().defaultTo(0);
        level.integer('classroom').notNullable().defaultTo(0);
        level.string('teacher').notNullable().defaultTo('');
        level.timestamp('create_at').defaultTo(knex.fn.now());
        level.charset('utf8');
      });
      yield app.mysql.query(userid.toString());

      /* --------------------------------------------------------------
      const uniqueName = knex.schema.alterTable('member', function(t) {
        t.unique('name');
      });
      yield app.mysql.query(uniqueName.toString());
      
      ---------------- have the same function beside -----------------*/
      yield ctx.helper.men(app, 'member', 'name');

    }
    ctx.logger.warn('WARNNING!!!!');    
    ctx.logger.info('some request data: %j', ctx.request.body);
    ctx.logger.info(1000, Date.now() - start);
  });

// ------both use 'knex.schema.alterTable',the second more simple-----

};
