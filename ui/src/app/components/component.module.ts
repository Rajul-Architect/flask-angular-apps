import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
export { ModalService } from './modal/modal.service';
import { ModalService } from './modal/modal.service';
import { ListPipe } from './pipes/list.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ModalComponent,
    ListPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forChild(),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ModalService],

  exports: [ListPipe, PaginationComponent]
})
export class ComponentModule { }
