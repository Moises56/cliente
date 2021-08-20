import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
// import { MapboxGeocoder } from '@mapbox/mapbox-gl-geocoder';
import { promise } from 'selenium-webdriver';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MapcustomService {
  // mapbox = (mapboxgl as typeof mapboxgl);
  // map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/streets-v11';
  // lat = 14.0818 ;
  // lng = -87.20681;
  // zoom = 3;

  constructor() {
    // this.mapbox.accessToken = environment.mapPk;
   }

   

  // buildMap(): Promise<any>{
  //   return new Promise( executor: (resolve, reject) => {
  //     // *Contruccion del Mapa

  //     try {
  //         this.map = new mapboxgl.Map({
  //         container: 'map',
  //         style: this.style,
  //         zoom: this.zoom,
  //         center: [this.lng, this.lat]
  //       });
  
  //       resolve(value:{
  //         map: this.map
  //       });
        
  //     } catch (error) {
  //       reject(error);
  //     }
    
  //   });
  // }


  
}
