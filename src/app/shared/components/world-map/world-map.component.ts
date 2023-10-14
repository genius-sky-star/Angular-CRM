import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Map } from 'mapbox-gl';
import { Observable, map, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent {

  @Input() dataset: { [key: string]: any }[][] = [];

  constructor(private http: HttpClient) {

  }

  onMapLoad(map: Map) {
    console.log(map);
    map.addLayer({
      id: 'country-boundaries',
      source: {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      },
      'source-layer': 'country_boundaries',
      type: 'fill',
      paint: {
        'fill-color': '#FDCCCC',
        'fill-opacity': 1,
      },
    });

    map.addLayer({
      id: 'country-members',
      source: {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      },
      'source-layer': 'country_boundaries',
      "filter": [
        "in",
        'iso_3166_1',
        "FR",
        "US",
        'RU',
        "BR"
      ],
      type: 'fill',
      paint: {
        'fill-color': '#FF5B5B',
        'fill-opacity': 1,
      },
    });
    // map.setStyle('mapbox://styles/girlsgonegame/clkkb2t5200eu01ph4z7e40uw');
    map.setProjection('mercator');
    this.getGeoJSONDataForCountryCodes([])
    .subscribe(res => {
      map.addSource('selected-countries',
      {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: res
        }
      })
    })

  }

  // private getGeoJSONDataForCountryCodes(countryCodes: string[]): any {
  //   const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  //   const accessToken = environment.mapboxKey;

  //   const geoJSONData = {
  //     type: 'FeatureCollection',
  //     features: []
  //   };

  //   countryCodes = ['US', 'CA', 'MX'];
  //   countryCodes.forEach((code) => {
  //     const url = `${baseURL}${code}.json?types=country&access_token=${accessToken}`;
  //     this.http.get(url).subscribe((response: any) => {
  //       const feature = {
  //         type: 'Feature',
  //         properties: {},
  //         geometry: response.features[0].geometry
  //       };
  //       geoJSONData.features.push(feature as any);
  //     });
  //   });

  //   return geoJSONData;
  // }

  getGeoJSONDataForCountryCodes(countryCodes: string[]): Observable<any[]> {
    const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const accessToken = environment.mapboxKey;

    countryCodes = ['US', 'CA', 'MX'];
    const requests = countryCodes.map((code) => {
      const url = `${baseURL}${code}.json?types=country&access_token=${accessToken}`;
      return this.http.get(url).pipe(
        map((response: any) => {
          return {
            type: 'Feature',
            properties: {},
            geometry: response.features[0].geometry
          } as any;
        })
      );
    });

    return forkJoin(requests);
  }
}
