import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ViewEncapsulation } from '@angular/core';
import { GetValidationMessages } from '../middle/validationMessages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  constructor(public validation_messages: GetValidationMessages, public loginService: LoginService) { }
  loginForm: FormGroup;
  account_validation_messages = this.validation_messages.account_validation_messages
  ngOnInit() {
    this.formSkeleton()
  }
  formSkeleton() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

}
