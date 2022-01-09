import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ChangeRequestComponent } from './change-request/change-request.component';
import { ComponentModule } from '../../components/component.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    ChangeRequestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentModule,
    FormsModule,
    ComponentModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
