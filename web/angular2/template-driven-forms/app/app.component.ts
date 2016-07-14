import { Component } from '@angular/core';
// import { DraggableComponent } from './draggable.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>Template Driven Forms</h1>
      <form #form="ngForm">
        <label>Firstname:</label>
        <input type="text">

        <label>Firstname:</label>
        <input type="text">

        <label>Street:</label>
        <input type="text">

        <label>Zip:</label>
        <input type="text">

        <label>City:</label>
        <input type="text">

        <button type="submit">Submit</button>
      </form>
      <div draggable #myDraggable="draggable">I'm draggable!</div>
    `,
    // directives: [DraggableComponent]
})
export class AppComponent { }
