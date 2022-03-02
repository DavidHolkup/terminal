import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less']
})
export class CodeComponent implements OnInit {
  wallet = '9PuqHGoKN8LNcSUW16KkPUoCYdgzSxiBj6KHEYxMW2sN'
  code: string = ''
  people = {
    adults: 0,
    students: 0,
    children: 0,
  }

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      this.people.adults = params['adults'];
      this.people.students = params['students'];
      this.people.children = params['children'];
      this.code = JSON.stringify({
        ...params,
        wallet: this.wallet
      })
      console.log(this.code);
    })
  }

  ngOnInit(): void {
  }

}
