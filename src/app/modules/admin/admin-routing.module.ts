import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeRequestComponent } from './change-request/change-request.component';

const routes: Routes = [{
  path: '',
  component: ChangeRequestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
