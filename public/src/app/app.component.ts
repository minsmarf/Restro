
import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  // @ViewChild('search')
  // public searchElementRef: ElementRef;

  // public zoom: number;
  // public latitude: number;
  // public longitude: number;
  // public latlongs: any = [];
  // public latlong: any = {};
  // public searchControl: FormControl;
  
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    
  }
  ngOnInit() {
    // this.zoom = 8;
    // this.latitude = 37.335;
    // this.longitude = -121.89;

    // this.searchControl = new FormControl();
    // this.setCurrentPosition();
    // this.mapsAPILoader.load().then(() => {
    //   const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: [],
    //     componentRestrictions: {'country': 'US'}
    //   });
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
    //       this.searchControl.reset();
    //     });
    //   });
    // });
  }
  // private setCurrentPosition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 8;
  //     });
  //   }
  // }
}
