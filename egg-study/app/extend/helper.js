'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = {
  * unique(app, table, colum) {
  /*
    const ctx = app.createAnonymousContext();
    const str = '><script>alert("abc") </script><';
    console.log(ctx.helper.escape(str));
  */

    const s = knex.schema.alterTable(table, function(t) {
      t.unique(colum);
    });
    yield app.mysql.query(s.toString()); // toString :mysql languge
  },
};
