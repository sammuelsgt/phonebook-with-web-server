import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PhoneBook } from '../interfaces/phone-book';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb  () {
    let phonebook =[
      {
        id: 1,
        name: 'Samm',
        email: 'samm@gmail.com',
        phone: '099999'
      },
      {
        id: 2,
        name: 'Tuliao',
        email: 'tuliao@gmail.com',
        phone: '0888888'
      },
    ]

    return {phonebook}
 }
 genId(contact: PhoneBook[]): number {
  return contact.length > 0 ? Math.max(...contact.map(contact => contact.id)) + 1:1;
}
}
