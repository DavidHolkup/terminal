import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  people = {
    adults: 0,
    students: 0,
    children: 0,
  };
}
