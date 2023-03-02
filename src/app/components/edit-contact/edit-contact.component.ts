import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneBook } from 'src/app/interfaces/phone-book';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  contact: PhoneBook 
  = {
    id: 0,
    name: '',
    email: '',
    phone: ''
  };

  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private phoneBookService: PhoneBookService,
    private router: Router
    ) { }

ngOnInit(): void {
  this.id = +this.route.snapshot.paramMap.get('id')!;
  this.phoneBookService.getContact(this.id).subscribe(contact => this.contact = contact)

}

saveChanges(name: string, email: string, phone: string): void {
this.phoneBookService.updateContact({...this.contact, name, email, phone}).subscribe();
this.router.navigate(['/']);
}
}
