import * as rp from 'request-promise';

class AppDynamicsApi {

    public businessApplications: object[];

    private controllerUrl: string;
    private user: string;
    private password: string;

    constructor(controller: string) {
        this.controllerUrl = 'http://' + controller;

        this.user = process.env.CONTROLLER_USER + '@' + process.env.CONTROLLER_TENANT;
        this.password = process.env.CONTROLLER_PASSWORD;

        this.updateBusinessApplications();

    }

    makeRequest(uri, output = 'json') {

        const options = {
            uri: this.controllerUrl + uri,
            qs: {
                output
            },
            json: true,
            auth: {
                user: 'david@customer1',
                password: '181088'
            }
        };

        return rp(options)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(`ERROR! ${err}`);
            });
    }

    updateBusinessApplications() {

        const uri = '/controller/rest/applications?output=json';
        this.makeRequest(uri)
            .then((apps) => {
                this.businessApplications = apps;
                console.log(this.businessApplications);
            })
            .catch((err) => {
                console.log(`ERROR: ${err}`);
            });

    }

}

const appD = new AppDynamicsApi('vagrant-controller');
