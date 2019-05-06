import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllRestaurants() {
    return this._http.get('/api/restaurants/all');
  }
  getRestaurantById(id: string) {
    return this._http.get('/api/restaurants/' + id);
  }
  createRestaurant(restaurant: object) {
    console.log(restaurant);
    return this._http.post('/api/restaurants/new', restaurant);
  }
  updateRestaurantById(id: string, restaurant: object) {
    return this._http.put('/api/restaurants/update/' + id, restaurant);
  }
  nukeRestaurantById(restaurantId: string) {
    return this._http.delete('/api/restaurants/delete/' + restaurantId);
  }
  updateRestaurantRateById(id: string, avgRating: number, restaurant: object ) {
    console.log(id + ' ' + avgRating);
    return this._http.put('/api/restaurants/updaterate/' + id + '/' + avgRating, restaurant);
  }


  getAllReviews() {
    return this._http.get('/api/reviews/all');
  }
  getReviewByResto(restaurantId: string) {
    return this._http.get('/api/reviews/' + restaurantId);
  }
  createReview(restaurantId: string, restaurant: object) {
    return this._http.post('/api/reviews/new/' + restaurantId, restaurant);
  }
  updateReviewById(restaurantId: string, reviewId: string, restaurant: object) {
    return this._http.put('/api/reviews/update/'+ restaurantId +'/'+ reviewId, restaurant);
  }
  nukeReviewById(restaurantId: string, reviewId: string) {
    return this._http.delete('/api/reviews/delete/'+ restaurantId +'/'+ reviewId);
  }
}

