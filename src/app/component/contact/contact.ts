import { Component, inject, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { email, form, FormField, FormRoot, maxLength, minLength, required, submit } from '@angular/forms/signals';
import { ContactForm2I, ContactFormI } from '../home/model';
import { MessageService } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { ContactS } from '../../services/contact';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';


@Component({
  selector: 'app-contact',
  imports: [InputTextModule, FloatLabelModule, CardModule,
    TextareaModule,
    ButtonModule,
    InputMaskModule,
    ToastModule,
    FormRoot,
    FormField,
    MessageModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  providers: [MessageService]
})
export class Contact {
  contactServices = inject(ContactS);
  private messageService = inject(MessageService);

  private readonly initialData = {
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: ''
  };




  private readonly model = signal<ContactForm2I>({ ...this.initialData })

  readonly contactForm = form(this.model, (schema) => {
    required(schema.name, { message: 'Name is required' });
    required(schema.email, { message: 'Email is required' });
    required(schema.phoneNumber, { message: 'PhoneNumber is required' });
    required(schema.companyName,  { message: 'CompanyName is Required' });
    required(schema.message,  { message: 'CompanyName is Required' });
    
    minLength(schema.name, 3, { message: 'Name is too short' });
    minLength(schema.phoneNumber, 11, { message: 'Please enter a Valid phoneNumber' });
    minLength(schema.companyName, 3, { message: 'Company is too short '});
    minLength(schema.message, 4, { message: 'Message is too short.' });
    
    maxLength(schema.name, 150, { message: 'Exceeds the maximum length.' });
    maxLength(schema.companyName, 150, { message: 'Exceeds the maximum length.' });

    maxLength(schema.message, 650, { message: 'Exceeds the maximum length.' });
    maxLength(schema.phoneNumber, 10, { message: 'Exceeds the maximum length.' });
    email(schema.email, { message: 'Please Enter a valid Email address' });
  });


  async onSubmit(event: Event) {
    event.preventDefault();
    await submit(this.contactForm, async (f) => {
      const formData = this.model();

      try {
        const res: any = await firstValueFrom(this.contactServices.sendEmail(formData))

        if (res.ok) {
          this.showSuccess()
          f().reset({
            name: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            message: ''
          })

          return undefined
        }
      } catch (err) {
        this.showError()
        return undefined
      }

    });

  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'We’ve received your request. Let’s build your future together.' });
  }
  showError() {
    this.messageService.add({ severity: 'success', summary: 'Info', detail: 'Something Went Wrong' });
  }


}
