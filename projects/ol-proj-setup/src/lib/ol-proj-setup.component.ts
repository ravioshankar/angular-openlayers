import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj.js';

@Component({
  selector: 'lib-ol-proj-setup',
  templateUrl: './ol-proj-setup.component.html',
  styleUrls: ['./ol-proj-setup.component.scss']
})
export class OlProjSetupComponent implements OnInit {

  map;
  youtubeUrl = 'https://www.youtube.com/watch?v=xzljBhPQMJU';
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
