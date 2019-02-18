import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeHolder: string;
  @Input() test: () => {};

  @Output() searchTransactions: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  search(str: string) {
    console.log('input', str);
    this.searchTransactions.emit(str);
  }

}
