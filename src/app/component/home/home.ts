import { Component, inject, OnInit, signal } from '@angular/core';
import { form, required, email, minLength, maxLength, FormField, submit, FormRoot } from '@angular/forms/signals'

import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ContactFormI } from './model';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { Contact } from '../../services/contact';
import { MessageService } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { Mission } from '../mission/mission';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    FormField,
    InputTextModule,
    CardModule,
    MessageModule,
    InputMaskModule,
    ToastModule,
    FormRoot,
    Mission,
    About
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers:[MessageService]
})
export class Home implements OnInit {

  private readonly initialData = {  name:'',
    email:'',
    phoneNumber:'' };

  private readonly model = signal<ContactFormI>({...this.initialData})
 

  contactServices = inject(Contact);
  private messageService = inject(MessageService);
  

   readonly contactForm = form(this.model, (schema) => {
    required(schema.name, { message: 'Name is required' });
    required(schema.email, { message: 'Email is required' });
    required(schema.phoneNumber, { message: 'PhoneNumber is required' });
    minLength(schema.name, 3, { message: 'Name is too short' });
    maxLength(schema.name, 150, { message: 'Exceeds the maximum length.' });
    minLength(schema.phoneNumber, 10, { message: 'Please enter a Valid phoneNumber'});
    maxLength(schema.phoneNumber, 10, { message: 'Exceeds the maximum length.' });
    email(schema.email, { message: 'Please Enter a valid Email address' });
  });
  
  ngOnInit(): void {

   

  }


  async onSubmit(event:Event) {
      event.preventDefault();
      await submit(this.contactForm, async (f) => {
      const formData = this.model();

    try {
      const res:any = await firstValueFrom(this.contactServices.sendEmail(formData))

      if(res.ok) {
        this.showSuccess()
        f().reset({name:'',email:'',phoneNumber:''})

        return undefined
      }
    }catch(err) {
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


