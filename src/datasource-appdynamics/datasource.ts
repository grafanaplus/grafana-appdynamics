
export class AppDynamicsDatasource {

    username: string;
    password: string;
    tenant: string;
    controllerHost: string;


    constructor(instanceSettings, private $q, private backendSrv, private templateSrv) {

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
