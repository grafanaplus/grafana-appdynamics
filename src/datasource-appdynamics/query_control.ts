import { QueryCtrl } from 'app/plugins/sdk';

export class AppDynamicsQueryCtrl extends QueryCtrl {

    static templateUrl = 'datasource-appdynamics/partials/query.editor.html';



    constructor($scope, $injector, uiSegmentSrv) {
        super($scope, $injector);

        this.target = this.target;

    }


}
