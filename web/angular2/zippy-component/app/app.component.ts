import { Component } from '@angular/core';
import { ZippyComponent } from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Zippy Component</h1>
    <my-zippy></my-zippy>
    `,
    directives: [ZippyComponent]
})
export class AppComponent { }
