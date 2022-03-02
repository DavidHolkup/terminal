import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  people = {
    adults: 0,
    students: 0,
    children: 0,
  };

  generateQrCode() {
    const url = `QR/${this.people.adults}/${this.people.students}/${this.people.children}`
    this.router.navigateByUrl(url);
  }
}
