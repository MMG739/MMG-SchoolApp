import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  { path: 'classes', component: ClassesComponent },
  { path: 'students', component: EtudiantsComponent},
  { path: '', redirectTo: '/classes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
