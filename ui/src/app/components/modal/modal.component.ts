import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public title: string = '';
  public closeBtnName: string = '';
  public template: any = '';
  public showFooter: boolean = false;
  public onClose: Subject<boolean> = new Subject<boolean>();

  constructor(public bsModalRef: BsModalRef) {
  }
  ngOnInit(): void {
  }
}
