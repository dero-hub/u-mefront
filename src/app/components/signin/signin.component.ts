import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  }
  submitted = false;


  constructor(private router: Router, private zone: NgZone, private http: UserService) { }

  ngOnInit(): void {
  }

  saveUser() {
    const userDetails = {
      username: this.user.username,
      password: this.user.password
    };
    this.submitted = true;
    return this.http.signin(userDetails)
  }

  async register() {
    await this.zone.run(async () => {
      this.router.navigate(['/user/signup']).then(r => console.log(r));
    });
  }

  async resetPwd() {
    await this.zone.run(async () => {
      this.router.navigate(['/user/resetpwd']).then(r => console.log(r));
    });
}

async home() {
  await this.zone.run(async () => {
    this.router.navigate(['']).then(r => console.log(r));
  });
}

async dashboard() {
  await this.zone.run(async () => {
    this.router.navigate(['/user/dashboard']).then(r => console.log(r));
  });
}

}
