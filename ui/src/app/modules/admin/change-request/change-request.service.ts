import { Injectable } from '@angular/core';
import { AppProxyService } from 'src/app/app-proxy.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangeRequestService {
  public baseUrl = environment.changeRequestAPI

  constructor(private apiProxy: AppProxyService) { }

  public getChangeRequestsPage(params: any) {
    return this.apiProxy.get(this.baseUrl + 'cr', params);
  }

  public getChangeRequestTypes() {
    return this.apiProxy.get(this.baseUrl + 'crtype');
  }

  public createChangeRequest(data: any) {
    return this.apiProxy.post(this.baseUrl + 'cr', data);
  }

  public updateChangeRequest(data: any) {
    return this.apiProxy.put(this.baseUrl + 'cr', data);
  }
}
