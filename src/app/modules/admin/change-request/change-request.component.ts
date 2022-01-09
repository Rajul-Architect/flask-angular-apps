import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConstantsHelper } from 'src/app/app-common/app-common.module';
import { ModalService } from 'src/app/components/component.module';
import { ChangeRequestService } from './change-request.service';

interface ChangeRequest {
  date: string;
  type: number;
  description: any;
  status: string;
  submittedBy: any;
}

@Component({
  selector: 'app-change-request',
  templateUrl: './change-request.component.html',
  styleUrls: ['./change-request.component.css']
})
export class ChangeRequestComponent implements OnInit {
  @ViewChild('createForm') createForm: any;
  @ViewChild('confirmationModal') confirmationModal: any;
  public componentData: any;
  public types: any = [];
  public totalPages = 0;
  public loading = false;
  public changeRequestModel: ChangeRequest = {
    date: new Date().toDateString(),
    type: -1,
    description: '',
    status: 'Submitted',
    submittedBy: localStorage.getItem('user')?.toString()
  };
  public pageModel: any = ConstantsHelper.defaultPageModel;

  constructor(
    private service: ChangeRequestService,
    private modalService: ModalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.getChangeRequestTypes().subscribe((types: any) => {
      this.types = types.map((x: any) => this.getObj(x));
      this.changeRequestModel.type = this.types[0].id;
    });
    this.getPaginatedData();
  }

  getObj(record: any): any {
    const obj = {
      id: record[0],
      name: record[1]
    }
    return obj;
  }
  create(form: any): void {
    if (form.valid) {
      this.service.createChangeRequest(this.changeRequestModel).subscribe(x => {
        this.modalService.closeModal();
        this.toastrService.success('Change Requested Created');
        this.getPaginatedData();
      })
    }
  }

  openModal(): void {
    this.modalService.openModal('Add a New Change Request', this.createForm);
  }

  close(): void {
    this.modalService.closeModal();
  }

  getPaginatedData(): void {
    this.loading = true;
    this.service.getChangeRequestsPage(this.pageModel).subscribe((data: any) => {
      this.loading = false;
      this.totalPages = data.length > 0 ? data[0].total : 0;
      this.componentData = data;
    });
  }

  clear(): void {
    this.pageModel.searchRequest = '';
    this.pageModel.searchRequestOwner = '';
  }

  changePage(event: any): void {
    this.pageModel.page = event;
    this.getPaginatedData();
  }

  getNameByType(typeId: number): string {
    const types = this.types.filter((x: any) => x.id == typeId);
    return types.length > 0 ? types[0].name : '';
  }

  openConfirmation(request: any, status: string): void {
    this.changeRequestModel = JSON.parse(JSON.stringify(request));
    this.changeRequestModel.status = status;
    this.modalService.openModal('Confirmation', this.confirmationModal);
  }
  updateStatus(): void {
    this.service.updateChangeRequest(this.changeRequestModel).subscribe(x => {
      this.changeRequestModel = {
        date: new Date().toDateString(),
        type: -1,
        description: '',
        status: 'Submitted',
        submittedBy: localStorage.getItem('user')?.toString()
      };
      this.getPaginatedData();
      this.modalService.closeModal();
    });
  }
}
