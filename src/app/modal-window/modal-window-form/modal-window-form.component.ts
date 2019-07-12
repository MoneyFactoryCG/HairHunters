import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-window-form',
  templateUrl: './modal-window-form.component.html',
  styleUrls: ['./modal-window-form.component.scss']
})
export class ModalWindowFormComponent implements OnInit {

  form: FormGroup;
  isAgree: boolean = true;

  phoneRegex = /^\d{1}\d{1}-\d{3}-\d{2}-\d{2}$/;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required])
    });
    console.log(this.form.invalid)
  }

  onSubmit() {

  }

}
