import { AppDynamicsDatasource } from './datasource';

class AppDynamicsConfigCtrl {
    static templateUrl = 'partials/config.html';
}

class AppDynamicsQueryOptionsCtrl {
    static templateUrl = 'partials/query.options.html';
}

class AppDynamicsAnnotationsQueryCtrl {
    static templateUrl = 'partials/annotations.editor.html';
}

export {
    AppDynamicsDatasource as Datasource,
    AppDynamicsConfigCtrl as ConfigCtrl,
    AppDynamicsQueryOptionsCtrl as QueryCtrl,
    AppDynamicsAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
