import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import ValidationHelper from 'src/app/shared/helpers/validation.helper';
import { RecaptchaComponent } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('captchaRef') captcha: RecaptchaComponent;
  lat: number = 16.036737;
  lng: number = 108.210182;
  zoom: number = 15;
  message = {
    type: '',
    message: ''
  };

  isSubmitted: boolean;
  formErrors = {
    name: '',
    email: '',
    message: ''
  };
  captchaResponse: string;
  contactForm: FormGroup;
  invalidMessages: string[];

  constructor(private fb: FormBuilder, private alertService: AlertService,) { }

  ngOnInit() {
    this.createForm();
    this.contactForm.valueChanges
      .subscribe(data => this.onFormValueChanged());
    window.scrollTo(0, 0);
  }

  createForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onFormValueChanged() {
    if (this.isSubmitted) {
      this.validateForm();
    }
  }

  validateForm() {
    this.invalidMessages = ValidationHelper.getInvalidMessages(this.contactForm, this.formErrors);
    return this.invalidMessages.length === 0;
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.validateForm()) {
      console.log("OK");
      this.message.type = 'success';
      this.message.message = 'Thêm thông tin liên hệ thành công';
      this.captcha.reset();
      setTimeout(function () {
        this.message = {
          type: '',
          message: '',
        }
      }.bind(this), 5000);
    }else{
      this.captcha.reset();
    }
  }

  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
  }

}
