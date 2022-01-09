import { Component } from '@angular/core';
import { MasterService } from './app-common/app-common.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'change-request-app';
  userName: any = '';
  constructor(private masterService: MasterService) {
    masterService.loginObservable.subscribe(x => {
      if (x) {
        this.userName = localStorage.getItem('user');
      } else {
        this.userName = '';
      }
    })
  }


}
