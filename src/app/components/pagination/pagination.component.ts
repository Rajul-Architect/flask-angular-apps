import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() id: any;
  @Input() maxSize: any;
  @Output() pageChange: EventEmitter<any> = new EventEmitter();

  public page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changePage(event: any): void {
    this.pageChange.emit(event);
  }

}
