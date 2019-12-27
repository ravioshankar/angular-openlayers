import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-docs',
  template: `
  <iframe id="appDocs" width="300" height="600"
  src="https://ravioshankar.github.io/angular-openlayers/components/AppComponent.html">
</iframe>
  `,
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}
