import { Component } from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: 'app/zippy.component.html'
})

export class ZippyComponent {
  visible:boolean = true;

  toggle() {
    this.visible = !this.visible;
  }
}
