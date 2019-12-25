import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-docs',
  template: `
  <iframe id="basic-setup" width="300" height="600"
  src="https://ravioshankar.github.io/angular-openlayers/index.html">
</iframe>
  `,
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
