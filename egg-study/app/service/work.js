'use strict';

module.exports = app => {
  class Work extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('work', param); // 'namelist' is the table name
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('work', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * select() {
      let text;
      try {
      /* 
        text = yield app.mysql.select('work', { 
          where: {
            name: [ 'Amy', '' ],
          },
        });
      */
        text = yield app.mysql.select('work');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return text;
    }

    * delete(a) {
      try {
        yield app.mysql.delete('work', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * update(s) {
      try {
        yield app.mysql.update('work', s);
      } catch (q) {
        this.ctx.logger.error(q);
        return false;
      }
      return true;
    }

  }
  return Work;
};

