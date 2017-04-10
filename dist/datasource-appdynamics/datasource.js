"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppDynamicsDatasource {
    constructor(instanceSettings, $q, backendSrv, templateSrv) {
        this.$q = $q;
        this.backendSrv = backendSrv;
        this.templateSrv = templateSrv;
        // Controller settings
        this.username = instanceSettings.username;
        this.password = instanceSettings.password;
        this.controllerHost = instanceSettings.controllerHost;
        this.tenant = instanceSettings.tenant;
    }
    query(options) {
        // TODO: implement query
    }
    testDatasource() {
        // TODO implement testDatasource
    }
    annotationQuery() {
        // TODO implement annotationQuery
    }
    metricFindQuery() {
        // TODO implement metricFindQuery
    }
}
exports.AppDynamicsDatasource = AppDynamicsDatasource;
