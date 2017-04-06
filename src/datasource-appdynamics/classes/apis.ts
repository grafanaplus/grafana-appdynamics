import * as rp from 'request-promise';

class AppDynamicsApi{

    public businessApplications: Object[];

    private controllerUrl: string;
    private user: string;
    private password: string;

    constructor(controller: String){
        this.controllerUrl = 'http://' + controller;

        this.user = process.env.CONTROLLER_USER  + '@' + process.env.CONTROLLER_TENANT ;
        this.password = process.env.CONTROLLER_PASSWORD ;

    }

    makeRequest(uri, output='json'){

        let options =  {uri: this.controllerUrl + uri,
                        qs: {output: output},
                        json: true,
                        auth: {
                            user: 'david@customer1',
                            password: '181088'
                        }
        };

        return rp(options)
        .then( res => {
            return res;
        })
        .catch( err => {
            console.log(`ERROR! ${err}`);
        });
    }

    getAllBusinessApplications(){

        let uri = '/controller/rest/applications?output=json';
        this.makeRequest(uri)
        .then(apps => {
            this.businessApplications = apps;
            console.log(this.businessApplications);
        })
        .catch( err => {
            console.log(`ERROR: ${err}`);
        });


    }

}

var appD = new AppDynamicsApi('vagrant-controller');
appD.getAllBusinessApplications();
