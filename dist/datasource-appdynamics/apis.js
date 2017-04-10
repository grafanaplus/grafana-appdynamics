"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
class AppDynamicsApi {
    constructor(controller) {
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
                user: this.user,
                password: this.password
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
        const uri = '/controller/rest/applications';
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
