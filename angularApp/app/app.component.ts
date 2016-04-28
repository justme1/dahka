import {Component} from 'angular2/core';
import {Http} from 'angular2/http'
import {HTTPTestComponent} from "./http-test.component";
@Component({
    selector: 'my-app',
    template: `<h1>aaaasssWorld6aaaaa323232323fdffaaa2aa</h1> <http-test></http-test>`,
    directives : [HTTPTestComponent]

})
export class AppComponent {
    ngOnInit() {
    }
}
