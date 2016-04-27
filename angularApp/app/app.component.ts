import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>hello world22122</h1>`
})

export class AppComponent {
    ngOnInit() {
        require.ensure(["test"], function(require) {
            console.log(require("test"));
        });
    }
}
