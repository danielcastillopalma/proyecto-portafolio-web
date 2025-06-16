import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './components/util/toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'proyecto-portafolio-web';
}
