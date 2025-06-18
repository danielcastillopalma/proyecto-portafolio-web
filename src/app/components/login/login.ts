import { Component } from '@angular/core';
import { Firebase } from '../../services/firebase/firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private firebase: Firebase, private router: Router) { }

  async login() {

    const email = (<HTMLInputElement>document.getElementById('login')).value;
    const pass = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(email, pass);
    await this.firebase.iniciarSesion(email, pass);


  }

}
