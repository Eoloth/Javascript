import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';

const appRouters: Routes = [
  { path: '', component: AppComponent },
  { path: 'sobre-mi', component: AboutMeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'crear-projecto', component: CreateComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'proyecto/:id', component: DetailComponent },
  { path: '**', component: ErrorComponent }, //ruta 404
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRouters);
