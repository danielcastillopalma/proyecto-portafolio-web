import { Component } from '@angular/core';
import { Apirest } from '../../services/apirest/apirest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-puntos-verdes',
  imports: [CommonModule],
  templateUrl: './puntos-verdes.html',
  styleUrl: './puntos-verdes.css'
})
export class PuntosVerdes {
  puntosVerdes: any;
  constructor(private api: Apirest) {
    this.api.getPuntosVerdes().then(resp => {
      this.puntosVerdes = resp;
    })
  }
}
