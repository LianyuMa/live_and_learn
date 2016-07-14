import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>Template Driven Forms</h1>
      <form>
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
    `
})
export class AppComponent { }
