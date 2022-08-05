// Importar modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';

// Array de configuracion de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'videojuego', component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'cursos/:nombre/:followers', component: CursosComponent },
  { path: 'cursos/:nombre/:apellidos', component: CursosComponent },
  { path: 'Externo', component: ExternoComponent },
  { path: '**', component: HomeComponent },
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
