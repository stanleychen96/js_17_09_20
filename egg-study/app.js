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
  const ctx = app.createAnonymousContext();
  app.beforeStart(function* () {
    // -------------------------users--------------------------------

    const haveusers = yield app.mysql.query(knex.schema.hasTable('users').toString());
    if (haveusers.length === 0) {
      const userid = knex.schema.createTableIfNotExists('users', function(table) {
        table.increments();
        table.string('mobile').notNullable().defaultTo('');
        table.string('wechat').notNullable().defaultTo('');
        table.string('name').notNullable().defaultTo('');
        table.string('headpicture').notNullable().defaultTo('');
        table.integer('votenumber').notNullable().defaultTo(3);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.boolean('type').notNullable().defaultTo(false);
        table.charset('utf8');
      });
      yield app.mysql.query(userid.toString());
    }

    // -------------------------works------------------------------

    const haveworks = yield app.mysql.query(knex.schema.hasTable('works').toString());
    if (haveworks.length === 0) {
      const photoid = knex.schema.createTableIfNotExists('works', function(level) {
        level.increments();
        level.string('userid').notNullable().defaultTo('');
        level.string('url').notNullable().defaultTo('');
        level.integer('votebnumber').notNullable().defaultTo(0);
        level.timestamp('create_at').defaultTo(knex.fn.now());
        level.boolean('status').notNullable().defaultTo(0);
        level.charset('utf8');
      });
      yield app.mysql.query(photoid.toString());

      yield ctx.helper.unique(app, 'users', 'mobile');
      yield ctx.helper.unique(app, 'users', 'wechat');
      yield ctx.helper.unique(app, 'works', 'url');
    }

    // --------------------------------------------------------------

  });
};
