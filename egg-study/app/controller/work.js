'use strict';

module.exports = app => {
  class WorkController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.work.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.work.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.work.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.work.update(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.work.select(this.ctx.request.body);
    }
  }
  return WorkController;
};
