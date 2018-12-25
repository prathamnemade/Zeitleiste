import { Injectable } from '@angular/core';

@Injectable()
export class GetValidationMessages {
    account_validation_messages = {
        'firstName': [
            { type: 'required', message: 'FirstName is required' },
            { type: 'maxlength', message: 'FirstName cannot be more than 25 characters long' },
        ],
        'lastName': [
            { type: 'maxlength', message: 'LastName cannot be more than 25 characters long' },
        ],
        'emailID': [
            { type: 'validUsername', message: 'You are already registered with us!Please sign in.' },
            { type: 'required', message: 'EmailID is required' },
            { type: 'pattern', message: 'Incorrect EmailID' },
        ],
        'password': [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password cannot be less than 6 characters' },
            { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase,one special character and one number' },
        ],
        'birthday': [
            { type: 'required', message: 'Birthday Date is required' },
        ],
        'gender': [
            { type: 'pattern', message: 'Please select the gender' }
        ]
    }
}