"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_1 = require("./datasource");
exports.Datasource = datasource_1.AppDynamicsDatasource;
class AppDynamicsConfigCtrl {
}
AppDynamicsConfigCtrl.templateUrl = 'datasource-appdynamics/partials/config.html';
exports.ConfigCtrl = AppDynamicsConfigCtrl;
class AppDynamicsQueryOptionsCtrl {
}
AppDynamicsQueryOptionsCtrl.templateUrl = 'datasource-appdynamics/partials/query.options.html';
exports.QueryCtrl = AppDynamicsQueryOptionsCtrl;
class AppDynamicsAnnotationsQueryCtrl {
}
AppDynamicsAnnotationsQueryCtrl.templateUrl = 'datasource-appdynamics/partials/annotations.editor.html';
exports.AnnotationsQueryCtrl = AppDynamicsAnnotationsQueryCtrl;
