import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule} from 'ng-recaptcha/forms';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA7jTc6uB3oWrAT2T64kkgWCazIiPML5Lk'
      })
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU',
    } as RecaptchaSettings,
  }],
})
export class ContactModule { }
