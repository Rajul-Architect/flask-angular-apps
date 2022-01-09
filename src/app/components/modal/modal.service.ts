import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {

  constructor(private modalService: BsModalService) { }
  public openModal(title: string, template: any) {
    const initialState = {
      title: title, template: template
    };
    this.modalService.show(ModalComponent, {
      initialState,
      class: 'modal-md',
      backdrop: 'static',
      keyboard: false
    });
  }
  public closeModal() {
    this.modalService.hide(1);
  }
}
