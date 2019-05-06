import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resto-new',
  templateUrl: './resto-new.component.html',
  styleUrls: ['./resto-new.component.css']
})
export class RestoNewComponent implements OnInit {
  newResto: object;
  showErrors: boolean;
  duplicatError: string;

  constructor(private _httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.newResto = {
      name: '',
      cuisine: '',
      img: ''
    };
    this.duplicatError = '';
    this.showErrors = false;
  }

  goHome() {
    this.router.navigate(['/restaurants']);
  }
  createRestaurant() {
    console.log('new resto', this.newResto);
    let obs = this._httpService.createRestaurant(this.newResto);
    obs.subscribe(res => {
      console.log('Restaurant created', res);
      if (!res['status']) {
        if (res['data']['code'] === 11000) {
          this.duplicatError = 'Restaurant already exists!';
        }
        this.showErrors = true;
      } else {
        this.showErrors = false;
        this.router.navigate(['/restaurants']);
      }
    });
  }
}
