import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicitComponent } from './licit/licit.component';
import { WinnerComponent } from './licit/winner/winner.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "licit", component: LicitComponent },
  { path: "winner", component: WinnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
