
  
import {Injectable, NgZone} from '@angular/core';
import axios from 'axios';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private zone: NgZone) { }

  
  async signup(data: any) {

    // Make a request for a user with a given ID
    axios.post('http://localhost:8080/api/auth/signup', data)
      .then(function (response) {
        // handle success
        console.log(response.data);
        Swal.fire({
          text: 'Account Created Sucessfully',
          icon: 'success',
          showCancelButton: true,
        })
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }

  async signin(data: any) {
  console.log(data)
    let self = this;
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.post('http://localhost:8080/api/auth/signin', data,{headers} )
      .then(function (response) {
        // handle success
        console.log('response.data ' + response.data);

        localStorage.setItem('user', JSON.stringify(response.data));

        self.zone.run(async () => {
          self.router.navigate(['/user/dashboard']).then(r => console.log(r));
        });

        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }
}