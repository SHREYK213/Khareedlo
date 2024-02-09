import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './master-layout.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: "", redirectTo: "dashboard", pathMatch: "full"
  },
  {
    path: "dashboard", component: MasterLayoutComponent, children: [
      { path: '', component: ComponentsComponent }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterLayoutRoutingModule { }
