import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Stroke, Style, Fill, Circle as CircleStyle  } from 'ol/style';
import { OSM } from 'ol/source';
@Component({
  selector: 'lib-geojson-rendering',
  templateUrl: './geojson-rendering.component.html',
  styleUrls: ['./geojson-rendering.component.scss'],
})
export class GeojsonRenderingComponent implements OnInit{
  constructor() {}
  map;
  youtubeUrl = 'https://www.youtube.com/watch?v=csuEdZZebFs';
  youtubeVideoId = 'csuEdZZebFs';
  
  geojsonData = {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
    },
  
    features: [
      {
        type: 'Feature',
        properties: { name: '18th', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.669144, 41.857849] },
      },
      {
        type: 'Feature',
        properties: {
          name: '35th/Archer',
          agency: 'CTA',
          line: 'Orange Line',
        },
        geometry: { type: 'Point', coordinates: [-87.680632, 41.829274] },
      },
      {
        type: 'Feature',
        properties: {
          name: '95th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.62441, 41.722729] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Adams/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.625997, 41.879715] },
      },
      {
        type: 'Feature',
        properties: { name: 'Addison', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.718406, 41.946604] },
      },
      {
        type: 'Feature',
        properties: { name: 'Addison', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.653738, 41.947364] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Armitage',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.652692, 41.918196] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.665521, 41.88542] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.665491, 41.885302] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.666744, 41.885104] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.666441, 41.885264] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.66713, 41.885574] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland/63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.663788, 41.778795] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland/63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.664501, 41.778935] },
      },
      {
        type: 'Feature',
        properties: { name: 'Austin', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.774606, 41.887217] },
      },
      {
        type: 'Feature',
        properties: { name: 'Austin', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.779238, 41.871083] },
      },
      {
        type: 'Feature',
        properties: { name: 'Belmont', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.712274, 41.939115] },
      },
      {
        type: 'Feature',
        properties: { name: 'Chicago', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.654992, 41.896357] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.710708, 41.874111] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.706963, 41.884341] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.706108, 41.884266] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.70614, 41.884076] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.705982, 41.884427] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.708527, 41.966107] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kimball', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.712926, 41.968325] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kimball', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.713255, 41.968235] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lake', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627789, 41.885013] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lake', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628068, 41.885017] },
      },
      {
        type: 'Feature',
        properties: { name: 'Laramie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.755227, 41.886896] },
      },
      {
        type: 'Feature',
        properties: { name: 'Laramie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.755407, 41.886896] },
      },
      {
        type: 'Feature',
        properties: { name: 'Laramie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.755415, 41.88749] },
      },
      {
        type: 'Feature',
        properties: { name: 'Laramie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.75522, 41.887067] },
      },
      {
        type: 'Feature',
        properties: { name: 'Laramie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.754624, 41.887223] },
      },
      {
        type: 'Feature',
        properties: { name: 'Laramie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.754648, 41.887083] },
      },
      {
        type: 'Feature',
        properties: { name: 'LaSalle', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.63136, 41.875767] },
      },
      {
        type: 'Feature',
        properties: { name: 'LaSalle', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.63259, 41.875386] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'LaSalle/Van Buren',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.631438, 41.876834] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'LaSalle/Van Buren',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.631445, 41.876928] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'LaSalle/Van Buren',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.632173, 41.876911] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lawrence', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.658513, 41.968958] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Logan Square',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.707921, 41.929148] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Logan Square',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.710757, 41.930896] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Logan Square',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.70772, 41.929713] },
      },
      {
        type: 'Feature',
        properties: { name: 'Loyola', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.661285, 42.001437] },
      },
      {
        type: 'Feature',
        properties: { name: 'Main', agency: 'CTA', line: 'Purple Line' },
        geometry: { type: 'Point', coordinates: [-87.67942, 42.033363] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Merchandise Mart',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633972, 41.889581] },
      },
      {
        type: 'Feature',
        properties: { name: 'Midway', agency: 'CTA', line: 'Orange Line' },
        geometry: { type: 'Point', coordinates: [-87.738667, 41.786649] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629284, 41.879964] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629466, 41.879924] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629279, 41.880234] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629472, 41.880212] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629517, 41.881242] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629271, 41.881236] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629279, 41.881474] },
      },
      {
        type: 'Feature',
        properties: { name: 'Montrose', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.675161, 41.961644] },
      },
      {
        type: 'Feature',
        properties: { name: 'Montrose', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.675136, 41.961401] },
      },
      {
        type: 'Feature',
        properties: { name: 'Montrose', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.742929, 41.960892] },
      },
      {
        type: 'Feature',
        properties: { name: 'Montrose', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.742653, 41.960669] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Morgan',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.652077, 41.885641] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Morgan',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.651299, 41.885526] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Morgan',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.651313, 41.885685] },
      },
      {
        type: 'Feature',
        properties: { name: 'Morse', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.665952, 42.008003] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'North and Clybourn',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.648974, 41.910723] },
      },
      {
        type: 'Feature',
        properties: { name: 'Noyes', agency: 'CTA', line: 'Purple Line' },
        geometry: { type: 'Point', coordinates: [-87.683451, 42.058633] },
      },
      {
        type: 'Feature',
        properties: { name: 'Oak Park', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.794251, 41.886965] },
      },
      {
        type: 'Feature',
        properties: { name: 'Oakton', agency: 'CTA', line: 'Yellow Line' },
        geometry: { type: 'Point', coordinates: [-87.747358, 42.026451] },
      },
      {
        type: 'Feature',
        properties: { name: 'Oakton', agency: 'CTA', line: 'Yellow Line' },
        geometry: { type: 'Point', coordinates: [-87.747925, 42.028422] },
      },
      {
        type: 'Feature',
        properties: { name: "O'Hare", agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.904004, 41.97759] },
      },
      {
        type: 'Feature',
        properties: { name: 'Oak Park', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.793872, 41.872297] },
      },
      {
        type: 'Feature',
        properties: { name: 'Oak Park', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.789157, 41.871898] },
      },
      {
        type: 'Feature',
        properties: { name: 'Paulina', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.670813, 41.943715] },
      },
      {
        type: 'Feature',
        properties: { name: 'Paulina', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.671631, 41.943715] },
      },
      {
        type: 'Feature',
        properties: { name: 'Polk', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.669584, 41.871524] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.725535, 41.873915] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Orange Line' },
        geometry: { type: 'Point', coordinates: [-87.724875, 41.799879] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Orange Line' },
        geometry: { type: 'Point', coordinates: [-87.724366, 41.800087] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.723684, 41.853886] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.724653, 41.853964] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.724653, 41.853742] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.727303, 41.885655] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.727321, 41.885454] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.726275, 41.885587] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.726285, 41.885387] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.725968, 41.885564] },
      },
      {
        type: 'Feature',
        properties: { name: 'Pulaski', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.72596, 41.885398] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Quincy',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633708, 41.878886] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Quincy',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633834, 41.879081] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Quincy',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633708, 41.879086] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Quincy',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633703, 41.878271] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Quincy',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633692, 41.878531] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Quincy',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633829, 41.878881] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Quincy',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633824, 41.878534] },
      },
      {
        type: 'Feature',
        properties: { name: 'Racine', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.657144, 41.875912] },
      },
      {
        type: 'Feature',
        properties: { name: 'Racine', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.661682, 41.875868] },
      },
      {
        type: 'Feature',
        properties: { name: 'Ridgeland', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.784415, 41.887089] },
      },
      {
        type: 'Feature',
        properties: { name: 'Rockwell', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.693937, 41.966219] },
      },
      {
        type: 'Feature',
        properties: { name: 'Rosemont', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.860472, 41.983946] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Sedgwick',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.63866, 41.910405] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Sedgwick',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.639624, 41.910479] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Sedgwick',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.639631, 41.910357] },
      },
      {
        type: 'Feature',
        properties: { name: 'Sheridan', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.654711, 41.953911] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'South Boulevard',
          agency: 'CTA',
          line: 'Purple Line',
        },
        geometry: { type: 'Point', coordinates: [-87.678406, 42.02737] },
      },
      {
        type: 'Feature',
        properties: { name: 'Southport', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.663764, 41.943829] },
      },
      {
        type: 'Feature',
        properties: { name: 'Southport', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.664032, 41.943835] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'State/Lake',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.627606, 41.885687] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'State/Lake',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.628289, 41.885833] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'State/Lake',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.628282, 41.885681] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'State/Lake',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.627628, 41.885835] },
      },
      {
        type: 'Feature',
        properties: { name: 'Thorndale', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.659064, 41.990137] },
      },
      {
        type: 'Feature',
        properties: { name: 'UIC-Halsted', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.65179, 41.875473] },
      },
      {
        type: 'Feature',
        properties: { name: 'UIC-Halsted', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.649607, 41.875513] },
      },
      {
        type: 'Feature',
        properties: { name: 'UIC-Halsted', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.647332, 41.875541] },
      },
      {
        type: 'Feature',
        properties: { name: 'Washington', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629348, 41.882469] },
      },
      {
        type: 'Feature',
        properties: { name: 'Washington', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629343, 41.883736] },
      },
      {
        type: 'Feature',
        properties: { name: 'Washington', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629595, 41.88379] },
      },
      {
        type: 'Feature',
        properties: { name: 'Washington', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629716, 41.883375] },
      },
      {
        type: 'Feature',
        properties: { name: 'Washington', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629356, 41.882703] },
      },
      {
        type: 'Feature',
        properties: { name: 'Washington', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.62957, 41.88245] },
      },
      {
        type: 'Feature',
        properties: { name: 'Washington', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629567, 41.882716] },
      },
      {
        type: 'Feature',
        properties: {
          name: '95th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.62437, 41.721558] },
      },
      {
        type: 'Feature',
        properties: {
          name: '95th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.624394, 41.721866] },
      },
      {
        type: 'Feature',
        properties: {
          name: '87th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.62478, 41.736443] },
      },
      {
        type: 'Feature',
        properties: {
          name: '87th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.624769, 41.73615] },
      },
      {
        type: 'Feature',
        properties: {
          name: '79th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.625188, 41.751152] },
      },
      {
        type: 'Feature',
        properties: {
          name: '79th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.625194, 41.750866] },
      },
      {
        type: 'Feature',
        properties: {
          name: '69th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.625828, 41.769079] },
      },
      {
        type: 'Feature',
        properties: {
          name: '69th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.625821, 41.768839] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lake', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627748, 41.884061] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lake', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627743, 41.883724] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lake', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628035, 41.883724] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627891, 41.881541] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627856, 41.880263] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.62788, 41.881274] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627646, 41.881557] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627614, 41.880001] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627656, 41.881289] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cottage Grove-East 63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.606024, 41.780531] },
      },
      {
        type: 'Feature',
        properties: { name: 'King Drive', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.615712, 41.779981] },
      },
      {
        type: 'Feature',
        properties: { name: 'King Drive', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.615565, 41.780605] },
      },
      {
        type: 'Feature',
        properties: { name: 'King Drive', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.615728, 41.780601] },
      },
      {
        type: 'Feature',
        properties: { name: 'King Drive', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.615701, 41.780401] },
      },
      {
        type: 'Feature',
        properties: { name: 'King Drive', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.615519, 41.779985] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland/63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.663938, 41.778835] },
      },
      {
        type: 'Feature',
        properties: { name: 'Halsted', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.644591, 41.779037] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cottage Grove-East 63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.606037, 41.780183] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cottage Grove-East 63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.606104, 41.780735] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cottage Grove-East 63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.605812, 41.780735] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cottage Grove-East 63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.605799, 41.780167] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cottage Grove-East 63rd',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.606016, 41.780327] },
      },
      {
        type: 'Feature',
        properties: {
          name: '47th-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.631625, 41.809266] },
      },
      {
        type: 'Feature',
        properties: {
          name: '63rd-Dan Ryan',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.631003, 41.780061] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cermak-Chinatown',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.631325, 41.854465] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cermak-Chinatown',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.630987, 41.853051] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cermak-Chinatown',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.630909, 41.852717] },
      },
      {
        type: 'Feature',
        properties: { name: 'Garfield', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.631184, 41.794626] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harrison', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627818, 41.872202] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harrison', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627707, 41.874143] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harrison', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.62746, 41.874151] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627829, 41.878998] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627826, 41.878737] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627577, 41.878978] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627579, 41.878714] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.62755, 41.877733] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627795, 41.877759] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627798, 41.87762] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627542, 41.877467] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627797, 41.877471] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Roosevelt/Wabash',
          agency: 'CTA',
          line: 'Red, Green, Orange Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.626545, 41.867611] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.62762, 41.880259] },
      },
      {
        type: 'Feature',
        properties: { name: 'Monroe', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627844, 41.879975] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Roosevelt/State',
          agency: 'CTA',
          line: 'Red, Green, Orange Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.627565, 41.867821] },
      },
      {
        type: 'Feature',
        properties: { name: 'Sox-35th', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.630679, 41.831082] },
      },
      {
        type: 'Feature',
        properties: { name: 'Sox-35th', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.630764, 41.834522] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Roosevelt/State',
          agency: 'CTA',
          line: 'Red, Green, Orange Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.627266, 41.868015] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Roosevelt/Wabash',
          agency: 'CTA',
          line: 'Red Green, Orange Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.626658, 41.867273] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Wellington',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.653317, 41.93621] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Wellington',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.65333, 41.937117] },
      },
      {
        type: 'Feature',
        properties: { name: 'Addison', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.653695, 41.947153] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Armitage',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.652686, 41.918044] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Belmont',
          agency: 'CTA',
          line: 'Red, Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.65337, 41.939057] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Belmont',
          agency: 'CTA',
          line: 'Red, Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.653381, 41.94004] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Belmont',
          agency: 'CTA',
          line: 'Red, Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.653378, 41.939795] },
      },
      {
        type: 'Feature',
        properties: { name: 'Chicago', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627836, 41.896593] },
      },
      {
        type: 'Feature',
        properties: { name: 'Chicago', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627923, 41.896775] },
      },
      {
        type: 'Feature',
        properties: { name: 'Chicago', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628448, 41.896586] },
      },
      {
        type: 'Feature',
        properties: { name: 'Chicago', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628412, 41.896774] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark and Division',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.63156, 41.903758] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark and Division',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.631344, 41.903752] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark and Division',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.631353, 41.904075] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark and Division',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.631561, 41.904067] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark and Division',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.632816, 41.903981] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark and Division',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.632794, 41.903697] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark and Division',
          agency: 'CTA',
          line: 'Red Line',
        },
        geometry: { type: 'Point', coordinates: [-87.632732, 41.90377] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Diversey',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.653166, 41.932586] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Diversey',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.653161, 41.93275] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Fullerton',
          agency: 'CTA',
          line: 'Red, Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.652842, 41.925285] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Fullerton',
          agency: 'CTA',
          line: 'Red, Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.65282, 41.924377] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Fullerton',
          agency: 'CTA',
          line: 'Red, Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.652852, 41.925502] },
      },
      {
        type: 'Feature',
        properties: { name: 'Grand', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627849, 41.891776] },
      },
      {
        type: 'Feature',
        properties: { name: 'Grand', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628372, 41.891595] },
      },
      {
        type: 'Feature',
        properties: { name: 'Grand', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628302, 41.891747] },
      },
      {
        type: 'Feature',
        properties: { name: 'Grand', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628194, 41.891796] },
      },
      {
        type: 'Feature',
        properties: { name: 'Grand', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.62768, 41.891604] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lake', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628046, 41.884064] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lake', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.628078, 41.885521] },
      },
      {
        type: 'Feature',
        properties: { name: 'Lake', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.627806, 41.88552] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Wilson',
          agency: 'CTA',
          line: 'Red, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.65749, 41.963579] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Wilson',
          agency: 'CTA',
          line: 'Red, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.657989, 41.965262] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Wilson',
          agency: 'CTA',
          line: 'Red, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.65804, 41.965509] },
      },
      {
        type: 'Feature',
        properties: { name: 'Western', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.688643, 41.966271] },
      },
      {
        type: 'Feature',
        properties: { name: 'Addison', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.67471, 41.948164] },
      },
      {
        type: 'Feature',
        properties: { name: 'Addison', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.674743, 41.946818] },
      },
      {
        type: 'Feature',
        properties: { name: 'Addison', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.67473, 41.947051] },
      },
      {
        type: 'Feature',
        properties: { name: 'Argyle', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.65857, 41.973378] },
      },
      {
        type: 'Feature',
        properties: { name: 'Berwyn', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.658708, 41.978073] },
      },
      {
        type: 'Feature',
        properties: { name: 'Bryn Mawr', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.658858, 41.983765] },
      },
      {
        type: 'Feature',
        properties: { name: 'Bryn Mawr', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.658871, 41.98355] },
      },
      {
        type: 'Feature',
        properties: { name: 'Damen', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.679384, 41.966405] },
      },
      {
        type: 'Feature',
        properties: { name: 'Damen', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.678964, 41.966414] },
      },
      {
        type: 'Feature',
        properties: { name: 'Francisco', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.703391, 41.966147] },
      },
      {
        type: 'Feature',
        properties: { name: 'Francisco', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.701175, 41.966166] },
      },
      {
        type: 'Feature',
        properties: { name: 'Granville', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.659172, 41.994472] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Howard',
          agency: 'CTA',
          line: 'Red, Purple, Yellow Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.673286, 42.019296] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Howard',
          agency: 'CTA',
          line: 'Red, Purple, Yellow Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.672972, 42.01926] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Howard',
          agency: 'CTA',
          line: 'Red, Purple, Yellow Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.672846, 42.018437] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Howard',
          agency: 'CTA',
          line: 'Red, Purple, Yellow Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.673455, 42.019491] },
      },
      {
        type: 'Feature',
        properties: { name: 'Irving Park', agency: 'CTA', line: 'Brown' },
        geometry: { type: 'Point', coordinates: [-87.674949, 41.954053] },
      },
      {
        type: 'Feature',
        properties: { name: 'Irving Park', agency: 'CTA', line: 'Brown' },
        geometry: { type: 'Point', coordinates: [-87.674935, 41.954364] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jarvis', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.669155, 42.015903] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.710779, 41.966088] },
      },
      {
        type: 'Feature',
        properties: { name: 'Morse', agency: 'CTA', line: 'Red Line' },
        geometry: { type: 'Point', coordinates: [-87.666006, 42.008943] },
      },
      {
        type: 'Feature',
        properties: { name: 'Western', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.688085, 41.966355] },
      },
      {
        type: 'Feature',
        properties: { name: 'Western', agency: 'CTA', line: 'Brown Line' },
        geometry: { type: 'Point', coordinates: [-87.688319, 41.966305] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Wilson',
          agency: 'CTA',
          line: 'Red, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.657646, 41.964053] },
      },
      {
        type: 'Feature',
        properties: { name: 'Western', agency: 'CTA', line: 'Orange Line' },
        geometry: { type: 'Point', coordinates: [-87.684087, 41.804856] },
      },
      {
        type: 'Feature',
        properties: {
          name: '35th-Bronzeville-IIT',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.625853, 41.831292] },
      },
      {
        type: 'Feature',
        properties: {
          name: '35th-Bronzeville-IIT',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.625907, 41.832927] },
      },
      {
        type: 'Feature',
        properties: { name: '43rd', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.619243, 41.816523] },
      },
      {
        type: 'Feature',
        properties: { name: '43rd', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.619053, 41.816716] },
      },
      {
        type: 'Feature',
        properties: { name: '43rd', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.618743, 41.816539] },
      },
      {
        type: 'Feature',
        properties: { name: '47th', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.618866, 41.809452] },
      },
      {
        type: 'Feature',
        properties: { name: '47th', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.619097, 41.809284] },
      },
      {
        type: 'Feature',
        properties: { name: '47th', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.618614, 41.809288] },
      },
      {
        type: 'Feature',
        properties: { name: '51st', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.618611, 41.802191] },
      },
      {
        type: 'Feature',
        properties: { name: '51st', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.618499, 41.801975] },
      },
      {
        type: 'Feature',
        properties: { name: '51st', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.618279, 41.802147] },
      },
      {
        type: 'Feature',
        properties: { name: 'Ashland', agency: 'CTA', line: 'Orange Line' },
        geometry: { type: 'Point', coordinates: [-87.665518, 41.839162] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cermak-McCormick Place',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.626414, 41.852639] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cermak-McCormick Place',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.626425, 41.853025] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Cermak-McCormick Place',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.626385, 41.851197] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Chicago',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.635383, 41.895526] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Chicago',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.636019, 41.895625] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Chicago',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.635434, 41.896505] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Chicago',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.636065, 41.896494] },
      },
      {
        type: 'Feature',
        properties: { name: 'Garfield', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.618341, 41.794896] },
      },
      {
        type: 'Feature',
        properties: { name: 'Halsted', agency: 'CTA', line: 'Orange Line' },
        geometry: { type: 'Point', coordinates: [-87.648046, 41.846777] },
      },
      {
        type: 'Feature',
        properties: { name: 'Indiana', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.621742, 41.821818] },
      },
      {
        type: 'Feature',
        properties: { name: 'Indiana', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.621358, 41.821812] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Orange Line' },
        geometry: { type: 'Point', coordinates: [-87.704383, 41.804518] },
      },
      {
        type: 'Feature',
        properties: { name: 'King Drive', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.615755, 41.780119] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Merchandise Mart',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.6341, 41.889498] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Merchandise Mart',
          agency: 'CTA',
          line: 'Brown, Purple Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.634148, 41.888708] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Western-Congress',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.686493, 41.875561] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Western/Milwaukee',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.687555, 41.916565] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Western/Milwaukee',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.687523, 41.916018] },
      },
      {
        type: 'Feature',
        properties: { name: 'Austin', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.774491, 41.870751] },
      },
      {
        type: 'Feature',
        properties: { name: 'California', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.697184, 41.922185] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cicero', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.745099, 41.87163] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cumberland', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.839208, 41.983879] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cumberland', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.839137, 41.983296] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cumberland', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.839271, 41.985047] },
      },
      {
        type: 'Feature',
        properties: { name: 'Forest Park', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.816564, 41.874366] },
      },
      {
        type: 'Feature',
        properties: { name: 'Forest Park', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.816628, 41.874111] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harlem', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.80812, 41.873659] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harlem', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.804682, 41.873328] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harlem', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.807123, 41.982341] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harlem', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.808026, 41.982333] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Illinois Medical District',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.672797, 41.875672] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Illinois Medical District',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.676327, 41.875613] },
      },
      {
        type: 'Feature',
        properties: { name: 'Irving Park', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.727842, 41.952166] },
      },
      {
        type: 'Feature',
        properties: { name: 'Irving Park', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.730615, 41.953753] },
      },
      {
        type: 'Feature',
        properties: { name: 'Irving Park', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.730146, 41.953484] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Jefferson Park',
          agency: 'CTA',
          line: 'Blue Line, Metra',
        },
        geometry: { type: 'Point', coordinates: [-87.763478, 41.971783] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Jefferson Park',
          agency: 'CTA',
          line: 'Blue Line, Metra',
        },
        geometry: { type: 'Point', coordinates: [-87.761619, 41.970258] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.706094, 41.874438] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629474, 41.878726] },
      },
      {
        type: 'Feature',
        properties: { name: 'Chicago', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.655625, 41.896187] },
      },
      {
        type: 'Feature',
        properties: { name: 'Chicago', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.654998, 41.896125] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark/Lake',
          agency: 'CTA',
          line: 'Blue, Pink, Green, Purple, Brown, Orange Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.63144, 41.885855] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark/Lake',
          agency: 'CTA',
          line: 'Blue, Pink, Green, Purple, Brown, Orange Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.630652, 41.885677] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark/Lake',
          agency: 'CTA',
          line: 'Blue, Pink, Green, Purple, Brown, Orange Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.630668, 41.885837] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clark/Lake',
          agency: 'CTA',
          line: 'Blue, Pink, Green, Purple, Brown, Orange Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.631722, 41.885652] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clinton',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.641232, 41.885633] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clinton',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.641214, 41.885473] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clinton',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.641417, 41.885512] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Clinton',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.641417, 41.885957] },
      },
      {
        type: 'Feature',
        properties: { name: 'Damen', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.677624, 41.909853] },
      },
      {
        type: 'Feature',
        properties: { name: 'Division', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.667688, 41.903937] },
      },
      {
        type: 'Feature',
        properties: { name: 'Damen', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.678543, 41.910545] },
      },
      {
        type: 'Feature',
        properties: { name: 'Division', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.667334, 41.903602] },
      },
      {
        type: 'Feature',
        properties: { name: 'Grand', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.648055, 41.891265] },
      },
      {
        type: 'Feature',
        properties: { name: 'Grand', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.647721, 41.89154] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.62919, 41.877348] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629195, 41.877564] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629383, 41.87732] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629214, 41.878744] },
      },
      {
        type: 'Feature',
        properties: { name: 'Jackson', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.629407, 41.877534] },
      },
      {
        type: 'Feature',
        properties: { name: 'LaSalle', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.631159, 41.875764] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Western/Milwaukee',
          agency: 'CTA',
          line: 'Blue Line',
        },
        geometry: { type: 'Point', coordinates: [-87.687142, 41.916054] },
      },
      {
        type: 'Feature',
        properties: { name: 'Western', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.685913, 41.854395] },
      },
      {
        type: 'Feature',
        properties: { name: 'Western', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.685506, 41.854403] },
      },
      {
        type: 'Feature',
        properties: { name: '54th/Cermak', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.758875, 41.851734] },
      },
      {
        type: 'Feature',
        properties: { name: '54th/Cermak', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.754267, 41.851818] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ashland',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.667084, 41.885102] },
      },
      {
        type: 'Feature',
        properties: { name: 'California', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.695687, 41.854303] },
      },
      {
        type: 'Feature',
        properties: { name: 'California', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.695392, 41.854307] },
      },
      {
        type: 'Feature',
        properties: { name: 'California', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.696547, 41.884329] },
      },
      {
        type: 'Feature',
        properties: { name: 'California', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.696295, 41.883974] },
      },
      {
        type: 'Feature',
        properties: { name: 'California', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.696488, 41.884138] },
      },
      {
        type: 'Feature',
        properties: { name: 'California', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.696467, 41.883971] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Central Park',
          agency: 'CTA',
          line: 'Pink Line',
        },
        geometry: { type: 'Point', coordinates: [-87.715206, 41.854037] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Central Park',
          agency: 'CTA',
          line: 'Pink Line',
        },
        geometry: { type: 'Point', coordinates: [-87.714903, 41.854025] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cicero', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.744396, 41.851934] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cicero', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.746649, 41.85191] },
      },
      {
        type: 'Feature',
        properties: { name: 'Clinton', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.64085, 41.875491] },
      },
      {
        type: 'Feature',
        properties: { name: 'Clinton', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.640855, 41.875634] },
      },
      {
        type: 'Feature',
        properties: { name: 'Clinton', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.641164, 41.875641] },
      },
      {
        type: 'Feature',
        properties: { name: 'Clinton', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.641158, 41.875509] },
      },
      {
        type: 'Feature',
        properties: { name: 'Damen', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.678205, 41.854495] },
      },
      {
        type: 'Feature',
        properties: { name: 'Damen', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.676032, 41.854591] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.705451, 41.854187] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.705188, 41.854179] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kostner', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.732246, 41.853768] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kostner', agency: 'CTA', line: 'Pink Line' },
        geometry: { type: 'Point', coordinates: [-87.734445, 41.853748] },
      },
      {
        type: 'Feature',
        properties: { name: 'LaSalle', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.631337, 41.875455] },
      },
      {
        type: 'Feature',
        properties: { name: 'LaSalle', agency: 'CTA', line: 'Blue Line' },
        geometry: { type: 'Point', coordinates: [-87.631175, 41.875464] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Morgan',
          agency: 'CTA',
          line: 'Green, Pink Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.652104, 41.885512] },
      },
      {
        type: 'Feature',
        properties: { name: 'California', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.697485, 41.884149] },
      },
      {
        type: 'Feature',
        properties: { name: 'Central', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.76532, 41.887329] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cicero', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.743514, 41.886606] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cicero', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.743559, 41.886386] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cicero', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.745228, 41.886961] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cicero', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.745075, 41.886476] },
      },
      {
        type: 'Feature',
        properties: { name: 'Cicero', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.745233, 41.88674] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Conservatory',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.717015, 41.885084] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Conservatory',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.717037, 41.884891] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Conservatory',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.716968, 41.88473] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Conservatory',
          agency: 'CTA',
          line: 'Green Line',
        },
        geometry: { type: 'Point', coordinates: [-87.716944, 41.885257] },
      },
      {
        type: 'Feature',
        properties: { name: 'Davis', agency: 'CTA', line: 'Purple Line' },
        geometry: { type: 'Point', coordinates: [-87.683835, 42.047845] },
      },
      {
        type: 'Feature',
        properties: { name: 'Dempster', agency: 'CTA', line: 'Yellow Line' },
        geometry: { type: 'Point', coordinates: [-87.752159, 42.039582] },
      },
      {
        type: 'Feature',
        properties: { name: 'Dempster', agency: 'CTA', line: 'Yellow Line' },
        geometry: { type: 'Point', coordinates: [-87.752344, 42.039524] },
      },
      {
        type: 'Feature',
        properties: { name: 'Dempster', agency: 'CTA', line: 'Purple Line' },
        geometry: { type: 'Point', coordinates: [-87.681544, 42.04169] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harlem', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.803365, 41.8868] },
      },
      {
        type: 'Feature',
        properties: { name: 'Harlem', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.805108, 41.886768] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Harlem',
          agency: 'CTA',
          line: 'Green Line, Metra',
        },
        geometry: { type: 'Point', coordinates: [-87.803381, 41.887097] },
      },
      {
        type: 'Feature',
        properties: { name: 'Kedzie', agency: 'CTA', line: 'Green Line' },
        geometry: { type: 'Point', coordinates: [-87.706285, 41.884074] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wells',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633975, 41.882942] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Adams/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.626237, 41.878935] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Adams/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.625993, 41.879258] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Adams/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.626209, 41.879262] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Adams/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.626245, 41.879682] },
      },
      {
        type: 'Feature',
        properties: { name: 'Central', agency: 'CTA', line: 'Purple Line' },
        geometry: { type: 'Point', coordinates: [-87.685774, 42.064105] },
      },
      {
        type: 'Feature',
        properties: { name: 'Davis', agency: 'CTA', line: 'Purple Line' },
        geometry: { type: 'Point', coordinates: [-87.683534, 42.047863] },
      },
      {
        type: 'Feature',
        properties: { name: 'Foster', agency: 'CTA', line: 'Purple Line' },
        geometry: { type: 'Point', coordinates: [-87.683668, 42.053788] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Harold Washington Library',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.628006, 41.877004] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Harold Washington Library',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.62939, 41.876847] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Harold Washington Library',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.62991, 41.876938] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Harold Washington Library',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.628007, 41.876861] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'LaSalle/Van Buren',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.631872, 41.876774] },
      },
      {
        type: 'Feature',
        properties: { name: 'Linden', agency: 'CTA', line: 'Purple Line' },
        geometry: { type: 'Point', coordinates: [-87.690865, 42.073623] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wells',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633986, 41.882734] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wells',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633771, 41.882766] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wells',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633946, 41.882624] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wells',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633774, 41.882648] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wells',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633924, 41.881599] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wells',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633735, 41.881602] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wells',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.633782, 41.88299] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.626087, 41.882315] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.626261, 41.882319] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.62609, 41.882966] },
      },
      {
        type: 'Feature',
        properties: {
          name: 'Washington/Wabash',
          agency: 'CTA',
          line: 'Brown, Purple, Orange, Pink, Green Lines',
        },
        geometry: { type: 'Point', coordinates: [-87.626323, 41.882964] },
      },
    ],
  };

 

  ngOnInit(): void {

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.initilizeMap();
  

this.addVectorDataLayer(this.geojsonData);

  }

  initilizeMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        projection: 'EPSG:4326',
        center: [0, 0],
        zoom: 7,
      }),
    });
  }

  addVectorDataLayer(geojson) {
    const image = new CircleStyle({
      radius: 5,
      fill: new Fill({
        color: 'rgb(4, 11, 70)',
      }),
      stroke: new Stroke({ color: '#FF9C32', width: 2 }),
    });

    const styles = {
      Point: new Style({
        image,
      }),
      LineString: new Style({
        stroke: new Stroke({
          color: 'green',
          width: 1,
        }),
      }),
      MultiLineString: new Style({
        stroke: new Stroke({
          color: 'green',
          width: 1,
        }),
      }),
      MultiPoint: new Style({
        image,
      }),
      MultiPolygon: new Style({
        stroke: new Stroke({
          color: 'yellow',
          width: 1,
        }),
        fill: new Fill({
          color: 'rgba(255, 255, 0, 0.1)',
        }),
      }),
      Polygon: new Style({
        stroke: new Stroke({
          color: 'blue',
          lineDash: [4],
          width: 3,
        }),
        fill: new Fill({
          color: 'rgba(0, 0, 255, 0.1)',
        }),
      }),
      GeometryCollection: new Style({
        stroke: new Stroke({
          color: 'magenta',
          width: 2,
        }),
        fill: new Fill({
          color: 'magenta',
        }),
        image: new CircleStyle({
          radius: 10,
          fill: null,
          stroke: new Stroke({
            color: 'magenta',
          }),
        }),
      }),
      Circle: new Style({
        stroke: new Stroke({
          color: 'red',
          width: 2,
        }),
        fill: new Fill({
          color: 'rgba(255,0,0,0.2)',
        }),
      }),
    };
    const styleFunction = (feature) => {
      return styles[feature.getGeometry().getType()];
    };
    const vectorSource = new VectorSource({
      features: [],
    });
    vectorSource.clear();
    vectorSource.addFeatures(new GeoJSON().readFeatures(geojson));
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: styleFunction,
    });
    if (this.map.getLayers().getLength() === 2) {
      this.map.getLayers().getArray().pop();
    }
    this.map.addLayer(vectorLayer);
    this.map.getView().fit(vectorSource.getExtent());
  }
}
