'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = {
  * men(app, table, colum) {
    const s = knex.schema.alterTable(table, function(t) {
      t.unique(colum);
    });
    yield app.mysql.query(s.toString()); // toString :mysql languge
  },
};
