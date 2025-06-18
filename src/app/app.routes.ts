import { Routes } from '@angular/router';
import { News } from './components/news/news';
import { PuntosVerdes } from './components/puntos-verdes/puntos-verdes';
import { Reportes } from './components/reportes/reportes';
import { Sugerencias } from './components/sugerencias/sugerencias';
import { Aportes } from './components/aportes/aportes';
import { Login } from './components/login/login';
import { LogOutGuard } from './guards/log-out-guard';
import { authGuard } from './guards/auth-guard'; // importa el nuevo guard

export const routes: Routes = [
    { path: 'login', component: Login },

    { path: 'news', component: News, canActivate: [authGuard] },
    { path: 'puntos-verdes', component: PuntosVerdes, canActivate: [authGuard] },
    { path: 'reportes', component: Reportes, canActivate: [authGuard] },
    { path: 'sugerencias', component: Sugerencias, canActivate: [authGuard] },
    { path: 'aportes', component: Aportes, canActivate: [authGuard] },

    {
        path: 'logOut',
        canActivate: [LogOutGuard],
        component: Login
    },

    { path: '', redirectTo: 'news', pathMatch: 'full' }, // ruta base
    { path: '**', redirectTo: 'news' } // wildcard para rutas no válidas
];
