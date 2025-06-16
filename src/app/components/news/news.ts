import { Component } from '@angular/core';
import { Apirest } from '../../services/apirest/apirest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  data: any;
  constructor(private api: Apirest) {
    this.api.getNews().then(response => {
      this.data = response;
    });
  }
  async deletePost(id: number) {
    console.log("id: ", id);
    await this.api.delNew(id);
  }
  async addPost() {
    const title = (<HTMLInputElement>document.getElementById('txtTitle')).value;
    const news = (<HTMLInputElement>document.getElementById('txtNew')).value;
    const link = (<HTMLInputElement>document.getElementById('txtLink')).value;
    await this.api.postNew(title, news, link, 'd.castillo3@duocuc.cl');
    window.location.reload();
  }
}
