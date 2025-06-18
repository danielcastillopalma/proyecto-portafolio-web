import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LogOutGuard implements CanActivate {
  constructor(private router: Router, private auth: Auth) { }

  async canActivate(): Promise<boolean> {
    await signOut(this.auth); // Cierra sesión
    this.router.navigate(['/login']); // Redirige al login u otra página
    return false; // Cancela navegación a /logOut
  }
}
