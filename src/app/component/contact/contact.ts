import { Component, inject, OnInit, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { ContactS } from '../../services/contact';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [InputTextModule, FloatLabelModule, CardModule,
    TextareaModule,
    ButtonModule,
    InputMaskModule,
    ToastModule,
    ReactiveFormsModule,
    MessageModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  providers: [MessageService]
})
export class Contact implements OnInit {
 
  contactServices = inject(ContactS);
  contactForm: FormGroup
  private messageService = inject(MessageService);
  message:string = ''
  
    submitted = false;  
  isLoading = false;  



  constructor(private fb:FormBuilder){
      this.contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
    companyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    message: ['', Validators.required] // Add validation back
  });
  }

  private readonly initialData = {
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message:''
  };


 


   ngOnInit(): void {

  

  }




  onSubmit() {
     this.isLoading = true;

    this.contactServices.sendEmail(this.contactForm.value).subscribe(
      {
        next:(res:any) => {
          if(res.ok) {
            this.showSuccess()
            this.contactForm.reset()
            this.isLoading = false;

          }
        },
        error:((err) => {
          console.error(err)
          this.showError();
           this.isLoading = false; 
        })
      }
    )
   

  }



   getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (!control?.errors) return '';

    const errors = control.errors!;
    if (errors['required']) return `${controlName} is required`;
    if (errors['email']) return 'Please enter a valid email address';
    if (errors['minlength']) return `${controlName} is too short`;
    if (errors['maxlength']) return 'Exceeds the maximum length';
    return '';
  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'We’ve received your request. Let’s build your future together.' });
  }
  showError() {
    this.messageService.add({ severity: 'success', summary: 'Info', detail: 'Something Went Wrong' });
  }





}
