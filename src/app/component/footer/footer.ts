import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-footer',
  imports: [Button,InputTextModule,DatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  year = new Date();
}
