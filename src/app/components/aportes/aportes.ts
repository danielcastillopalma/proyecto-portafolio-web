import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Apirest } from '../../services/apirest/apirest';

@Component({
  selector: 'app-aportes',
  imports: [CommonModule],
  templateUrl: './aportes.html',
  styleUrl: './aportes.css'
})
export class Aportes {
  aportes: any;
  constructor(private api: Apirest) {
    this.api.getAportes().then(res => {
      this.aportes = res;
    })
  }
}
