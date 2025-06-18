import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Firebase {
  app = initializeApp(environment.firebaseConfig);
  constructor(private route: Router) { }
  auth = getAuth(this.app)

  async iniciarSesion(email: string, pass: string) {
    const auth = getAuth();
    console.log("auth: ", auth);
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        this.route.navigateByUrl('news')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


}

