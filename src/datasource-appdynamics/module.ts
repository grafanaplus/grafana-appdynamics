import { AppDynamicsDatasource } from './datasource';

class AppDynamicsConfigCtrl {
    static templateUrl = 'datasource-appdynamics/partials/config.html';
}

class AppDynamicsQueryOptionsCtrl {
    static templateUrl = 'datasource-appdynamics/partials/query.options.html';
}

class AppDynamicsAnnotationsQueryCtrl {
    static templateUrl = 'datasource-appdynamics/partials/annotations.editor.html';
}

export {
    AppDynamicsDatasource as Datasource,
    AppDynamicsConfigCtrl as ConfigCtrl,
    AppDynamicsQueryOptionsCtrl as QueryCtrl,
    AppDynamicsAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
