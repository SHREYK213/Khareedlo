import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./master-layout/master-layout.module").then((m) => m.MasterLayoutModule),
  },
  {
    path: "signup",
    loadChildren: () =>
    import("./signup/signup-routing.module").then((m) => m.SignupRoutingModule),
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
