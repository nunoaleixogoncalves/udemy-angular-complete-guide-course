import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() tabSelected: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(tab: string) {
    this.tabSelected.emit(tab);
  }

}
