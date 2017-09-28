'use strict';

module.exports = app => {
  class LodashController extends app.Controller {
    * after() {
      this.ctx.body = yield this.service.lodash.after(this.request.body);
    }

  }
  return LodashController;
};
