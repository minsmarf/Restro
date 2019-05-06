import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';


@Component({
  selector: 'app-resto-all',
  templateUrl: './resto-all.component.html',
  styleUrls: ['./resto-all.component.css']
})

export class RestoAllComponent implements OnInit {
  restos: Array<object>;
  restoId: string;
  isFormVisible: boolean;

  // google maps
  @ViewChild('search')
  public searchElementRef: ElementRef;

  public zoom: number;
  public latitude: number;
  public longitude: number;
  public latlongs: any = [];
  public latlong: any = {};
  public searchControl: FormControl;

  constructor(private _httpService: HttpService, private router: Router,
    private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.isFormVisible = false;
    this.getAllRestos();

    // // google maps
    // this.zoom = 8;
    // this.latitude = 37.335;
    // this.longitude = -121.89;

    // this.searchControl = new FormControl();
    // this.setCurrentPosition();
    // this.mapsAPILoader.load().then(() => {
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: [],
    //     componentRestrictions: {'country': 'US'}
    //   });
    //   console.log(autocomplete);
    //   autocomplete.addListener('place_changed', () => {
    //     this.ngZone.run(() => {
    //       const place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //       if (place.geometry === undefined || place.geometry == null) {
    //         return;
    //       }
    //       const latlong = {
    //         latitude: place.geometry.location.lat(),
    //         longitude: place.geometry.location.lng(),
    //       };
    //       this.latlongs.push(latlong);
    //       // this.searchControl.reset();
    //     });
    //   });
    // });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
      });
    }
  }

  getAllRestos() {
    let obs = this._httpService.getAllRestaurants();
    obs.subscribe(res => {
      console.log("Restaurants", res);
      this.restos = res['data'];
      for (var i = 0; i < this.restos.length; i++) {
        let current = this.restos[i];
        let currentTime = new Date(current['createdAt']);
        let now = new Date(Date.now());
        // console.log( (now.getTime() - currentTime.getTime()) / 1000  );
        if ((now.getTime() - currentTime.getTime()) / 1000 < 30) {
          console.log('true');
          this.restos[i];
          // this.restos[i].delete = true;
          console.log(this.restos[i]);
        }
      }
      // console.log(this.restos);
    });
  }

  toggleForm(id: string) {
    this.isFormVisible = !this.isFormVisible;
    this.restoId = id;
  }

  dataFromChild(eventData) {
    this.isFormVisible = eventData;
    this.getAllRestos();
  }

  nukeResto(id: string) {
    let obs = this._httpService.nukeRestaurantById(id);
    obs.subscribe(res => {
      console.log(res);
      this.getAllRestos();
    });
  }
}
