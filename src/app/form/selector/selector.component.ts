import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})
export class SelectorComponent implements OnInit {

  @Input() title: string = ""
  @Input() amount: number = 0
  @Output() amountChange = new EventEmitter<number>()

  isMinimum: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.isMinimum = this.amount === 0;
  }

  change(increment: number) {
    this.amount += increment
    this.amountChange.emit(this.amount)
    this.isMinimum = this.amount === 0;
  }
}
