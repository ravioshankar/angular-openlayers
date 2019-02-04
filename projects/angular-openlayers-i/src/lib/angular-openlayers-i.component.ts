import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';

@Component({
  selector: 'lib-angular-openlayers-i',
  templateUrl: './angular-openlayers-i.component.html',
  styleUrls: ['./angular-openlayers-i.component.scss']
})
export class AngularOpenlayersIComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit() {
    this.initilizeMap();
  }

  initilizeMap() {

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new View({
        center: [37.41, 8.82],
        zoom: 4
      })
    });
  }
}
