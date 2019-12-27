import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import { toStringHDMS } from 'ol/coordinate.js';
import TileLayer from 'ol/layer/Tile';
import { toLonLat } from 'ol/proj.js';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'lib-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss']
})
export class SimplePopupComponent implements OnInit {

  constructor() { }

youtubeUrl = 'https://youtu.be/zJ8NPxnqSXg';
youtubeVideoId = 'zJ8NPxnqSXg';
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.initilizeMap();
  }

  initilizeMap() {


    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');


    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      overlays: [overlay],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
// pointermove
    map.on('singleclick', function (evt: any) {
      const coordinate = evt.coordinate;
      const hdms = toStringHDMS(toLonLat(coordinate));

      content.innerHTML = '<p>Current coordinates are :</p><code>' + hdms +
        '</code>';
      overlay.setPosition(coordinate);
    });


    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
  }
}
