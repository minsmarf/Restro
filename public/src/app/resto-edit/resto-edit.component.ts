import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resto-edit',
  templateUrl: './resto-edit.component.html',
  styleUrls: ['./resto-edit.component.css']
})
export class RestoEditComponent implements OnInit {
  editRestaurant : object;
  showErrors : boolean;
  duplicatError: string;
  prevName : string;
  @Input() restoId: string;
  @Input() isFormVisible: boolean;
  @Output() anEventEmitter = new EventEmitter();

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.editRestaurant = {
      name: "",
      rating: "",
      content: ""
    };
    this.duplicatError = "";
    this.getRestoById();
    console.log(this.restoId);
  }

  getRestoById() {
    let obs = this._httpService.getRestaurantById(this.restoId);
    obs.subscribe(res => {
      console.log('Restaurant by ID', res);
      this.editRestaurant = res['data'][0];
      this.prevName = res['data']['name'];
    });
  }
  editRestoFromDb() {
    if (this.prevName === this.editRestaurant['name']) {
      this.showErrors = false;
      this.anEventEmitter.emit(false);
    } else {
      let obs = this._httpService.updateRestaurantById(this.restoId, this.editRestaurant);
      obs.subscribe(res => {
        console.log('Restaurant updated', res);
        if (!res['status']) {
          if (res['data']['code'] === 11000) {
            this.duplicatError = 'Restaurant already exists!';
          }
          this.showErrors = true;
        } else {
          console.log('edit resto');
          this.showErrors = false;
          this.anEventEmitter.emit(false);
        }
      });
    }
  }
  closeForm() {
    this.anEventEmitter.emit(false);
  }

}
