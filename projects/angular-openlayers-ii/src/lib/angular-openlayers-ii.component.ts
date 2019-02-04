import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile';
import TileJSON from 'ol/source/TileJSON';

@Component({
  selector: 'lib-angular-openlayers-ii',
  templateUrl: './angular-openlayers-ii.component.html',
  styleUrls: ['./angular-openlayers-ii.component.scss']
})
export class AngularOpenlayersIIComponent implements OnInit {

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
        center: fromLonLat([-77.93255, 37.9555]),
        zoom: 4
      })
    });
  }

}
