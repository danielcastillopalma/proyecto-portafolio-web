import { Routes } from '@angular/router';
import { News } from './components/news/news';
import { PuntosVerdes } from './components/puntos-verdes/puntos-verdes';
import { Reportes } from './components/reportes/reportes';
import { Sugerencias } from './components/sugerencias/sugerencias';
import { Aportes } from './components/aportes/aportes';

export const routes: Routes = [

    { path: 'news', component: News },
    { path: 'puntos-verdes', component: PuntosVerdes },
    { path: 'reportes', component: Reportes },
    { path: 'sugerencias', component: Sugerencias },
    { path: 'aportes', component: Aportes },
];
