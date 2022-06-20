 import {Injectable, NgZone} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  async createProduct(data: any) {

    // Make a request for a user with a given ID
    axios.post('http://localhost:8080/api/auth/products/add', data)
      .then(function (response) {
        // handle success
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }

  async getAll() {

    // Make a request for a user with a given ID
    axios.get('http://localhost:8080/api/auth/products/all')
      .then(function (response) {
        // handle success
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }
}
