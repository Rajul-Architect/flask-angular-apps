import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  public $login: BehaviorSubject<any> = new BehaviorSubject(true);
  public loginObservable = this.$login.asObservable();
  constructor() { }
}
