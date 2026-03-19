import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContactFormI } from '../component/home/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactS {

  private http = inject(HttpClient)
  private url = 'https://formspree.io/f/mdawlggb'


  sendEmail(data: ContactFormI): Observable<ContactFormI> {
    return this.http.post<ContactFormI>(this.url, data);
  }
  
}
