import { Component } from '@angular/core';
import { Apirest } from '../../services/apirest/apirest';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-puntos-verdes',
  imports: [CommonModule],
  templateUrl: './puntos-verdes.html',
  styleUrl: './puntos-verdes.css'
})
export class PuntosVerdes {
  puntosVerdes: any;
  constructor(private api: Apirest, private sanitizer: DomSanitizer) {
    this.api.getPuntosVerdes().then(resp => {
      this.puntosVerdes = resp;
    })
  }
  getQrUrl(punto: any): string {
    const url = 'https://' + punto;
    return 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(url) + '&size=100x100';
  }
  getMapaUrl(lat: number, lng: number): SafeResourceUrl {
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
