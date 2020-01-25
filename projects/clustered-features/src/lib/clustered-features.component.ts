import { Component, OnInit } from '@angular/core';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {Cluster, OSM, Vector as VectorSource} from 'ol/source';
import {Circle as CircleStyle, Fill, Stroke, Style, Text} from 'ol/style';

@Component({
  selector: 'lib-clustered-features',
  templateUrl: './clustered-features.component.html',
  styleUrls: ['./clustered-features.component.scss']
})
export class ClusteredFeaturesComponent implements OnInit {
  map;
  youtubeUrl = 'https://www.youtube.com/watch?v=ysL9w1o7zMw&t=';
  youtubeVideoId = 'ysL9w1o7zMw&t=';
  distance;
  clusterSource;
  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.initilizeMap();
  }

  initilizeMap() {
    const count = 20000;
    this.distance = '40';
 
const features = new Array(count);
const e = 4500000;
for (let i = 0; i < count; ++i) {
  const coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
  features[i] = new Feature(new Point(coordinates));
}

const source = new VectorSource({
  features: features
});

const clusterSource = new Cluster({
  distance: parseInt(this.distance, 10),
  source: source
});

const styleCache = {};

const clusters = new VectorLayer({
  source: clusterSource,
  style: function(feature) {
    const size = feature.get('features').length;
    let style = styleCache[size];
    if (!style) {
      style = new Style({
        image: new CircleStyle({
          radius: 10,
          stroke: new Stroke({
            color: '#fff'
          }),
          fill: new Fill({
            color: '#3399CC'
          })
        }),
        text: new Text(
          {
          text: size.toString(),
          fill: new Fill({
            color: '#fff'
          })
        })
      });
      styleCache[size] = style;
    }
    return style;
  }
});

const raster = new TileLayer({
  source: new OSM()
});

    this.map = new Map({
      target: 'map',
      layers: [
        raster, clusters
      ],
      view: new View({
        center: [37.41, 8.82],
        zoom: 4
      })
    });
  }
}
