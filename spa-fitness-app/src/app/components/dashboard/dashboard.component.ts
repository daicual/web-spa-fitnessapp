import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  formBotones: FormGroup;
  constructor(private _builder: FormBuilder) {
    this.formBotones = this._builder.group({});
  }

  ngOnInit(): void {}
}
