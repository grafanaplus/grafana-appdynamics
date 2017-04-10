"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("app/plugins/sdk");
class AppDynamicsQueryCtrl extends sdk_1.QueryCtrl {
    constructor($scope, $injector, uiSegmentSrv) {
        super($scope, $injector);
        this.target = this.target;
    }
}
AppDynamicsQueryCtrl.templateUrl = 'datasource-appdynamics/partials/query.editor.html';
exports.AppDynamicsQueryCtrl = AppDynamicsQueryCtrl;
