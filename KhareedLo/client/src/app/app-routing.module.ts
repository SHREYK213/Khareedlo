import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo: "", pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () =>
      import("./master-layout/master-layout.module").then((m) => m.MasterLayoutModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup-routing.module").then((m) => m.SignupRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
