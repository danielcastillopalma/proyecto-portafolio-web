import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Apirest } from '../../services/apirest/apirest';

@Component({
  selector: 'app-sugerencias',
  imports: [CommonModule],
  templateUrl: './sugerencias.html',
  styleUrl: './sugerencias.css'
})
export class Sugerencias {
  sugerencias: any;
  constructor(private api: Apirest) {
    this.api.getSugerencias().then(res => {
      this.sugerencias = res;
    })
  }
}
