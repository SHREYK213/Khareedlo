import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutModule } from './master-layout/master-layout.module';


const routes: Routes = [

  {
    path: "",
    loadChildren: () =>
      import("./master-layout/master-layout.module").then((m) => m.MasterLayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
