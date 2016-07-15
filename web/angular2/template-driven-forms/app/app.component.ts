import { Component } from '@angular/core';
// import { DraggableComponent } from './draggable.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>Template Driven Forms</h1>
      <form #form="ngForm" (ngSubmit)="logForm(form.value)">
        <fieldset ngModelGroup="name">
          <label>Firstname:</label>
          <input type="text" name="firstname" [(ngModel)]="firstname">
          <p>You entered {{firstname}}</p>

          <label>Lastname:</label>
          <input type="text" name="lastname" [(ngModel)]="lastname">
          <p>You entered {{lastname}}</p>
        </fieldset>

        <fieldset ngModelGroup="address">
          <label>Street:</label>
          <input type="text" name="street" ngModel>

          <label>Zip:</label>
          <input type="text" name="zip" ngModel>

          <label>City:</label>
          <input type="text" name="city" ngModel>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    `,
    // directives: [DraggableComponent]
})
export class AppComponent {
  firstname = 'Pascal';
  lastname = 'Precht';

  logForm(value: any) {
    console.log(value);
  }
}
