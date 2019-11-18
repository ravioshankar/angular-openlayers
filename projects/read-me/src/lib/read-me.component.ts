import { ReadMeService } from './read-me.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-read-me',
  templateUrl: '/read-me.component.html',
  styleUrls: ['/read-me.component.scss']
})
export class ReadMeComponent implements OnInit {

  @Input()
  youtubeUrl;
  iframe_html: any;
  constructor(private readMeService: ReadMeService) {

   }

  ngOnInit() {
    this.iframe_html = this.readMeService.embed(this.youtubeUrl);
  }

}
