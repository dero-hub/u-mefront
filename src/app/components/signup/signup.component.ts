import {Component, NgZone, OnInit} from '@angular/core';
import { User } from 'src/app/models/user.model';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone, private http: UserService) { }
  register: User = {
    firstname:'',
    lastname: '',
    username: '',
    email: '',
    dob: '',
    password: ''
    
  }
  submitted = false;


  ngOnInit(): void {
  }

  saveUser() {
   
    const userDetails = {
      firstname: this.register.firstname,
      lastname: this.register.lastname,
      username: this.register.username,
      email: this.register.email,
      dob: this.register.dob.toString(),
      password: this.register.password
      }
      console.log(userDetails);
      this.http.signup(userDetails);
      
    };

    newUser(): void {
      this.submitted = false;
      this.register = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        dob: '',
        password: ''
        
      };
    }

    async login() {
      await this.zone.run(async () => {
        this.router.navigate(['/user/login']).then(r => console.log(r));
      });
    }

    async dashboard() {
      await this.zone.run(async () => {
        this.router.navigate(['/user/dashboard']).then(r => console.log(r));
      });
    }
  }
