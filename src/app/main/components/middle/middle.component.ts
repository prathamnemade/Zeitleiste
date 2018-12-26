import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailValidator } from './email.validator';
import { GetValidationMessages } from './validationMessages';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class MiddleComponent implements OnInit {
  userDetailsForm: FormGroup;
  account_validation_messages = this.validation_messages.account_validation_messages
  constructor(private formBuilder: FormBuilder, public validation_messages: GetValidationMessages, public registerService: RegisterService) { }

  ngOnInit() {
    this.formSkeleton();
  }
  formSkeleton() {
    this.userDetailsForm = new FormGroup({
      'firstName': new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.required
      ])),
      'lastName': new FormControl('', Validators.compose([
        Validators.maxLength(25)
      ])),
      'emailID': new FormControl('', Validators.compose([
        EmailValidator.validUsername,//CHECK FOR EXISTENCE
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$'),
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
      ])),
      'birthday': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'gender': new FormControl('', Validators.compose([
        Validators.required,
      ])),
    })
  }
  validateUsername() {

  }


}
