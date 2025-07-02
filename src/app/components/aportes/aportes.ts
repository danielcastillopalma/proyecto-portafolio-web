import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Apirest } from '../../services/apirest/apirest';

@Component({
  selector: 'app-aportes',
  imports: [CommonModule],
  templateUrl: './aportes.html',
  styleUrl: './aportes.css'
})
export class Aportes implements AfterViewInit {
  aportes: any;
  async ngAfterViewInit(): Promise<void> {
    await this.api.getAportes().then(res => {
      this.aportes = res;
    })
  }
  constructor(private api: Apirest) {

  }
}
