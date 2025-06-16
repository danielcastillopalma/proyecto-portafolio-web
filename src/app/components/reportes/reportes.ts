import { Component } from '@angular/core';
import { Apirest } from '../../services/apirest/apirest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes',
  imports: [CommonModule],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class Reportes {
  reportes: any;
  constructor(private api: Apirest) {
    this.api.getReportes().then(res => {
      this.reportes = res;
    })
  }
}
