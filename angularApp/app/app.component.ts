import {Component} from 'angular2/core';
import {Http} from 'angular2/http'
import {HTTPTestComponent} from "./http-test.component";
@Component({
    selector: 'my-app',
    template: `<h1>hello World5</h1> <http-test></http-test>`,
    directives : [HTTPTestComponent]

})

export class AppComponent {
    ngOnInit() {
        // require.ensure(["test"], function(require) {
        //     console.log(require("test"));
        // });



    }
}
