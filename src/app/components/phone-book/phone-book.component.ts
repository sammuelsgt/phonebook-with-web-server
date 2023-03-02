import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneBook } from 'src/app/interfaces/phone-book';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent {
  contacts: PhoneBook[] =[]
constructor(private phoneBookService:PhoneBookService, private router: Router){}

ngOnInit(): void {
  // this.contacts = this.phoneBookService.getContacts();
  this.phoneBookService.getContacts().subscribe(contacts => this.contacts = contacts)
}



deleteContact(id: number): void {
  
  this.contacts = this.contacts.filter(c => c.id !== id);
  this.phoneBookService.deleteContact(id).subscribe();
  this.router.navigate(['/']);
  }

}
