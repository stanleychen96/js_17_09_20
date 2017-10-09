'use strict';

module.exports = app => {
  class User extends app.Service {
    * signin(x) {
      try {
        yield app.mysql.insert('user', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * setname(x) {
      try {
        yield app.mysql.insert('user', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * setheadpicture(x) {
      try {
        yield app.mysql.insert('user', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * setmobile(x) {
      try {
        yield app.mysql.insert('user', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * login(req) {
      let res;
      try {
        res = yield app.mysql.get('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * type(req) {
      try {
        yield app.mysql.update('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

  }
  return User;
};
