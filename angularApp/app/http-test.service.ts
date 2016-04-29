import  {Injectable} from "angular2/core";
import  {Http} from "angular2/http";
import  'rxjs/add/operator/map'

@Injectable()
export  class  HTTPTestService {
    constructor (private _http:Http) {}

    getCurrentTime () {
        if (DEBUG) {
            console.log ('we are in DEBUG');
            console.log(ENVIRONMENT);
        }
        
        // return this._http.get('http://date.jsontest.com').map(res => res.json());
        // return this._http.get('http://localhost:8088/getAllImages').map(res => res.json());
        return this._http.get('/getAllImages').map(res => res.json());
        // return this._http.get('http://localhost:8088/getCurrentTime').map(res => res.json());

    }
}
