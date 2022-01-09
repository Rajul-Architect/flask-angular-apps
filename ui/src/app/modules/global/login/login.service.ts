import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppProxyService } from '../../../app-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public baseUrl = environment.loginUrl;

  constructor(private apiProxy: AppProxyService) { }

  login(data: any) {
    return this.apiProxy.post(this.baseUrl, data);
  }

}
