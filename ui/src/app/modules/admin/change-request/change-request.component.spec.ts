import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeRequestComponent } from './change-request.component';
import { ToastrModule, ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { ChangeRequestService } from './change-request.service';
import { ComponentModule, ModalService } from 'src/app/components/component.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';

describe('ChangeRequestComponent', () => {
  let component: ChangeRequestComponent;
  let fixture: ComponentFixture<ChangeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeRequestComponent],
      imports: [FormsModule, HttpClientTestingModule, ToastrModule.forRoot(), ComponentModule, NgxPaginationModule],
      providers: [ChangeRequestService, ToastrService, ModalService, BsModalService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should open up the create modal & also trigger validations on click of submit', ((done) => {
    const action_add = document.querySelectorAll('#add')[0];
    action_add.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const modalTitle = document.querySelectorAll('.modal-dialog .modal-header .full-width .modal-title')[0];
      expect(modalTitle.innerHTML).toBe('Add a New Change Request');
      const submit_action: any = document.querySelectorAll('#create-submit')[0];
      submit_action.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const error: any = document.querySelectorAll('#description-error')[0]
        expect(error.innerHTML).toBe('Description is required');
        const close_action_col: any = document.querySelectorAll('#create-close')[0];
        close_action_col.click();
        done();
      });

    });
  }));

  it('should open up the confirmation modal', ((done) => {
    component.changeRequestModel = {
      date: new Date().toDateString(),
      type: -1,
      description: '',
      status: 'Submitted',
      submittedBy: localStorage.getItem('user')?.toString()
    };
    component.componentData = [{ "total": 11, "id": "dd0d55bb-c7dd-4fd7-b473-303f044fbce2", "type": "1", "description": "something", "status": "Cancelled", "date": "2022-01-09", "submittedBy": "Rajul Dubey" }, { "total": 11, "id": "bc03c4c0-419e-4593-a72d-b6ca8aa36045", "type": "2", "description": "Another", "status": "Submitted", "date": "2022-01-09", "submittedBy": "Rajul Dubey" }, { "total": 11, "id": "43f890b1-34af-4aa6-8ebd-11c302ea1725", "type": "1", "description": "New!!!1", "status": "Submitted", "date": "2022-01-09", "submittedBy": "Rajul Dubey" }, { "total": 11, "id": "debf232b-3d9c-4708-93cf-f456fa01c076", "type": "", "description": null, "status": "Approved", "date": "2022-01-08", "submittedBy": null }, { "total": 11, "id": "e229daf3-3b23-402f-96eb-68ed0fdfce77", "type": "", "description": null, "status": "Cancelled", "date": "2022-01-08", "submittedBy": null }]
    component.totalPages = 11;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const action_col: any = document.querySelector('#check-' + component.componentData[0].id);
      action_col.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const modalTitle = document.querySelectorAll('.modal-dialog .modal-header .full-width .modal-title')[0];
        expect(modalTitle.innerHTML).toBe('Confirmation');
        const close_action_col: any = document.querySelectorAll('#confirm-close')[0];
        close_action_col.click();
        done();
      });
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
