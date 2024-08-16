import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'employee', component:EmployeeComponent},
  {path: 'location', component:LocationComponent},
  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: '', redirectTo: 'login', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
