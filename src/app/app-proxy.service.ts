import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppProxyService {

  constructor(private http: HttpClient) { }

  public get(url: string, params?: any) {
    return this.http.get(url, { params: params });
  }

  public post(url: string, data: any) {
    return this.http.post(url, data);
  }

  public put(url: string, data: any) {
    return this.http.put(url, data);
  }

  public delete(url: string, data: any) {
    return this.http.delete(url, data);
  }

}
