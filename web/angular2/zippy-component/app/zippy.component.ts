import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: 'app/zippy.component.html'
})

export class ZippyComponent {
  @Input() title: string;

  visible:boolean = true;

  toggle() {
    this.visible = !this.visible;
  }
}
