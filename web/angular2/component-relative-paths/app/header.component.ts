import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-header',
  template: `
    <nav class="navbar-fixed">
      <span class="brand-logo center">Contacts</span>
    </nav>
  `,
  styles: ['.navbar-fixed { position:fixed; }']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {}
}
