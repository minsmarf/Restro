import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { isFormattedError } from '@angular/compiler';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {
  newReview: object;
  showErrors: boolean;
  selectError: string;
  @Input() resto: object;
  @Input() isFormVisible: boolean;
  @Output() anEventEmitter = new EventEmitter();

  constructor( private _httpService: HttpService) { }

  ngOnInit() {
    this.newReview = {
      name: "",
      rating:"",
      content:""
    };
    this.selectError = "";
    this.showErrors = false;
    console.log(this.resto);
  }
  closeForm() {
    this.anEventEmitter.emit(false);
  }
  createReview() {
    let obs = this._httpService.createReview(this.resto['_id'], this.newReview);

    obs.subscribe(res => {
      console.log("Review created", res);
      if (!res['status']) {
        if (this.newReview['rating'].length === 0) {
          this.selectError = "Rating cannot be blank";
        } else if (this.newReview['rating'] < 1 || this.newReview['rating'] > 6) {
          this.selectError = "Rating must be between 1 and 5";
        }
        this.showErrors = true;
      } else {
        this.showErrors = false;
        this.anEventEmitter.emit(false);
      }
    });
  }

}
