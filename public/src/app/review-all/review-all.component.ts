import { Component, ViewChild, ElementRef, NgZone, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBrowser } from 'selenium-webdriver';
import { OrderPipe } from 'ngx-order-pipe';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';



@Component({
  selector: 'app-review-all',
  templateUrl: './review-all.component.html',
  styleUrls: ['./review-all.component.css']
})

export class ReviewAllComponent implements OnInit {
  id: string;
  resto: object;
  reviews:  Array<object>;
  isFormVisible: boolean;
  avgRate: number;
  selectedMarker;
  // google maps
// google maps
  @ViewChild('search')
  public searchElementRef: ElementRef;

  public zoom: number;
  public latitude: number;
  public longitude: number;
  public latlongs: any = [];
  public latlong: any = {};
  public searchControl: FormControl;
  geocoder: any;
  public selectedAddress;

  constructor(
    private route: ActivatedRoute,
    private _httpService: HttpService,
    private router: Router
    , private orderPipe: OrderPipe
    ,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone
    ) {
     }

  ngOnInit() {
    this.resto = {};
    this.isFormVisible = false;
    this.avgRate = 0;
    this.getRestoById();

    // google maps
    this.zoom = 8;
    this.latitude = 37.335;
    this.longitude = -121.89;

    this.searchControl = new FormControl();
    this.setCurrentPosition();

    // this.mapsAPILoader.load().then(() => {
    //        this.geocoder = new google.maps.Geocoder();
    //      });
      
    this.mapsAPILoader.load().then(() => {
      // this.geocoder = new google.maps.Geocoder();
      // this.updateOnMap();
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: [],
        componentRestrictions: {'country': 'US'}
      });
      console.log(autocomplete);
      // console.log(autocomplete['zr'].gm_bindings_);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place.formatted_address);
          console.log(place.name);
          if (place.geometry === undefined || place.geometry == null) {
            return;
          }
          const latlong = {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
          };
          this.selectedAddress = place.name + ', ' + place.formatted_address;
         
          console.log(this.selectedAddress);
          this.latlongs.push(latlong);
          // this.searchControl.reset();
        });
      });
    });

   }
   findLocation(address) {
         if (!this.geocoder) { this.geocoder = new google.maps.Geocoder(); }
         this.geocoder.geocode({
           'name': address
         }, (results, status) => {
           console.log(results);
           if (status === google.maps.GeocoderStatus.OK) {
             console.log(status);
            //  for (let i = 0; i < results[0].address_components.length; i++) {
            //    let types = results[0].address_components[i].types 
            //    console.log(types); 
            //    if (types.indexOf('locality') != -1) { 
            //      this.location.address_level_2 = results[0].address_components[i].long_name 
            //    } 
            //    if (types.indexOf('country') != -1) { 
            //      this.location.address_country = results[0].address_components[i].long_name 
            //    } 
            //    if (types.indexOf('postal_code') != -1) { 
            //      this.location.address_zip = results[0].address_components[i].long_name 
            //    } 
            //    if (types.indexOf('administrative_area_level_1') != -1) { 
            //      this.location.address_state = results[0].address_components[i].long_name 
            //    } 
            //  } 
            //  if (results[0].geometry.location) { 
            //    this.location.lat = results[0].geometry.location.lat(); 
            //    this.location.lng = results[0].geometry.location.lng(); 
            //    this.location.marker.lat = results[0].geometry.location.lat(); 
            //  this.location.marker.lng = results[0].geometry.location.lng(); 
            //   this.location.marker.draggable = true; 
            //    this.location.viewport = results[0].geometry.viewport; 
            //  }
     
     
            // this.map.triggerResize()
          } else {
             alert('Sorry, this search produced no results.');
           }
         });
       }
    
   updateOnMap() {
         console.log('updating');
         let name: string = this.searchControl.value;
         this.findLocation(name);
         console.log(name);
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
  selectMarker(event) {
    console.log(event);
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
    console.log(this.selectedMarker);
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  getRestoById() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.avgRate = 0;
      let observable = this._httpService.getRestaurantById(params['id']);
      observable.subscribe(res => {
        console.log(res);
        // console.log('avg: ' + this.avgRate);
        this.resto = res['data'][0];
        this.reviews = this.resto['reviews'];
        this.reviews = this.orderPipe.transform(this.resto['reviews'], 'rating');
        for (let i = 0; i < this.reviews.length; i++) {
          this.avgRate = this.avgRate + this.reviews[i]['rating'];
        }
        if (this.reviews.length > 0) {
          this.avgRate = this.avgRate / this.reviews.length;
          // this.avgRate = parseFloat(Math.round(this.avgRate*10^2)/10^2);
          this.updateRate(params['id']);
        }
        console.log(this.reviews);
        // const myform = document.getElementById('myform');
        // myform.onsubmit = function() {
        //   myform.submit();
        // };


        // this.reviews.sort(this.compare);
        // console.log(this.avgRate);
      });
   });
  }

  updateRate(restoid: string) {
    let observable = this._httpService.updateRestaurantRateById(restoid, this.avgRate, this.resto);
    observable.subscribe(res => {
      // console.log(res);
    });
  }


  dataFromChild(eventData) {
    console.log('eventData', eventData);
    this.isFormVisible = eventData;
    this.getRestoById();
  }

  compare(a, b) {
    const genreA = a.rating;
    const genreB = b.rating;

    let comparison = 0;
    if (genreA < genreB) {
      comparison = 1;
    } else if (genreA > genreB) {
      comparison = -1;
    }
    return comparison;
  }



}
