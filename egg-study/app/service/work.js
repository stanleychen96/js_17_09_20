'use strict';

module.exports = app => {
  class Work extends app.Service {
    * userid(param) {
      try {
        yield app.mysql.insert('work', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * url(param) {
      try {
        yield app.mysql.insert('work', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * list() {
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

    * vote() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('user', {
          where: {
            id: [],
          },
        });
        yield conn.update('work', {
          where: {
            i: [ 'uerid' ],
          },
        });
        yield conn.commit();
      } catch (err) {
        yield conn.rollback();
        this.ctx.logger.error(err);
        return false;
      }
      return true;
    }

  }
  return Work;
};

