import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneBook } from 'src/app/interfaces/phone-book';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: PhoneBook 
  = {
    id: 0,
    name: '',
    email: '',
    phone: ''
  };
  constructor(private phoneBookService:PhoneBookService, private router: Router){}
  addContact(name: string, email: string, phone: string): void {
  
    this.phoneBookService.addContact({ name, email, phone } as PhoneBook).subscribe();
    this.router.navigate(['/']);
  }
}


