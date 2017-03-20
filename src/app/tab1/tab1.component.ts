import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
}                               from '@angular/forms';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  contactsForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.contactsForm = this.fb.group({
      firstName: ['',[Validators.compose([Validators.required])]],
      lastName: ['',[Validators.compose([Validators.required])]],
      email: ['',[Validators.compose([Validators.required])]],
      phoneNumber:['',[Validators.compose([Validators.required])]]
    });
  }

  ngOnInit() {
  }
  onSubmit(model, isValid: boolean) {
    console.log(model, isValid);
  }

}
