import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Languages } from './../../../services/languages';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  imports: [FormsModule,RouterModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {
  http = inject(HttpClient);

  languages = inject(Languages);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyAccepted: "",
    emailSent: false,
  }

  post = {
    endPoint: 'https://younes-darabi.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.contactData.emailSent = true,
        });
    }
  }
}