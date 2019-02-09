import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import Feature from 'ol/Feature';
import sVector from 'ol/source/Vector';
import lVector from 'ol/layer/Vector';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';

@Component({
  selector: 'lib-angular-openlayers-iii',
  templateUrl: './angular-openlayers-iii.component.html',
  styleUrls: ['./angular-openlayers-iii.component.scss']
})
export class AngularOpenlayersIIIComponent implements OnInit {
  map;
  chicago;
  vectorSource;
  vectorLayer;
  rasterLayer;
  london: any;
  madrid: any;
  constructor() { }

  ngOnInit() {
    this.initilizeMap();
  }

  initilizeMap() {

    this.chicago = new Feature({
      geometry: new Point(fromLonLat([	-87.623177, 41.881832]))
    });

    this.chicago.setStyle(new Style({
      image: new Icon(({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: 'assets/vectorpoint.svg',
        imgSize: [20, 20]
      }))
    }));

    this.london = new Feature({
      geometry: new Point(fromLonLat([-0.12755, 51.507222]))
    });
  
    this.madrid = new Feature({
      geometry: new Point(fromLonLat([-3.683333, 40.4]))
    });

    this.london.setStyle(new Style({
      image: new Icon(({
        color: '#4271AE',
        crossOrigin: 'anonymous',
        src: 'assets/vectorpoint.svg',
        imgSize: [20, 20]
      }))
    }));
  
    this.madrid.setStyle(new Style({
      image: new Icon(({
        color: [113, 140, 0],
        crossOrigin: 'anonymous',
        src: 'assets/dot.png',
        imgSize: [20, 20]
      }))
    }));
  
    this.vectorSource = new VectorSource({
      features: [this.chicago, this.madrid,this.london]
    });
  
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });
  
    this.rasterLayer = new TileLayer({
      source: new TileJSON({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
        crossOrigin: ''
      })
    });

    this.map = new Map({
      target: 'map',
      layers: [ this.rasterLayer, this.vectorLayer ],
      view: new View({
        center: fromLonLat([2.896372, 44.60240]),
        zoom: 3
      })
    });
  }

}
