import { Component, OnInit, Renderer2 } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import {defaults as defaultControls, Control} from 'ol/control.js';
import Group from 'ol/layer/Group';
import {Stamen} from 'ol/source';
import {transform} from 'ol/proj.js';
@Component({
  selector: 'lib-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.scss']
})
export class CustomControlComponent implements OnInit {

  constructor(private renderer: Renderer2) {


  }
  map;

  appendElement;
  ngOnInit() {
    this.initilizeMap();

  }

  initilizeMap() {




    // tslint:disable-next-line: no-shadowed-variable
    const  SourceSwitcher = (function (Control) {
      // tslint:disable-next-line: no-shadowed-variable
      function SourceSwitcher(renderer: Renderer2, opt_options?) {
        const options = opt_options || {};

        const button = renderer.createElement('button');
        button.className = 'btn-sty';
        const txt = renderer.createText('Source Switcher');
        renderer.appendChild(button, txt);
        const element: any = renderer.createElement('div');
        element.className = 'rotate-north ol-unselectable ol-control';
        renderer.appendChild(element, button);

        Control.call(this, {
          element: element,
          target: options.target
        });

        button.addEventListener('click', this.switchSource.bind(this), false);
      }

      if ( Control ) { SourceSwitcher.__proto__ = Control; }
      SourceSwitcher.prototype = Object.create( Control && Control.prototype );
      SourceSwitcher.prototype.constructor = SourceSwitcher;

      SourceSwitcher.prototype.switchSource = function switchSource () {
        // Add your logic here to switch layers
        alert('Add you logic as per requirements');
        console.log('The map is ..', this.getMap().getLayers());
      };

      return SourceSwitcher;
    }(Control));

    this.map = new Map({
      controls: defaultControls().extend([
        new SourceSwitcher(this.renderer)
      ]),
      target: 'map',
      layers: [
          new Group({
              // A layer must have a title to appear in the layerswitcher

              layers: [
                  new Group({
                      visible: true,
                      layers: [
                          new Tile({
                              source: new Stamen({
                                  layer: 'watercolor'
                              })
                          }),
                          new Tile({
                              source: new Stamen({
                                  layer: 'terrain-labels'
                              })
                          })
                      ]
                  }),
                  new Tile({

                      source: new Stamen({
                          layer: 'watercolor'
                      })
                  }),
                  new Tile({
                      visible: false,
                      source: new OSM()
                  })
              ]
          })
      ],
      view: new View({
          center: transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
          zoom: 6
      })
  })

  }

}
