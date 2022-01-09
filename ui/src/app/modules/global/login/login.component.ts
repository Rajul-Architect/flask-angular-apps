import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/app-common/app-common.module';
import { LoginService } from './login.service';

interface Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public creds: Credentials = {
    username: '',
    password: ''
  }
  public loginFailed = false;

  constructor(
    private masterService: MasterService,
    private service: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.masterService.$login.next(false);
  }

  login(form: any): void {
    this.loginFailed = false;
    if (form.valid) {
      this.service.login(this.creds).subscribe((x: any) => {
        localStorage.setItem('token', x.token);
        localStorage.setItem('user', x.firstName + ' ' + x.lastName);
        this.router.navigate(['/']);
        this.masterService.$login.next(true);
      },
        err => {
          this.loginFailed = true;
        });
    }
  }

}
