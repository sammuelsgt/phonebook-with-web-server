import { Injectable } from '@angular/core';
import { PhoneBook } from '../interfaces/phone-book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  constructor( private http: HttpClient){}
  private phoneBookUrl = 'api/phonebook';
  getContacts(): Observable<PhoneBook[]> {
    return this.http.get<PhoneBook[]>(this.phoneBookUrl);
  }

  getContact(id: number):Observable<PhoneBook> {
    const url = `${this.phoneBookUrl}/${id}`;
    return this.http.get<PhoneBook>(url)
  }

  addContact(contact: PhoneBook): Observable<PhoneBook> {
    return this.http.post<PhoneBook>(this.phoneBookUrl, contact,  this.httpOptions)
  }

  updateContact(contact: PhoneBook): Observable<any> {
    return this.http.put(this.phoneBookUrl, contact)
  }

  deleteContact(id: number): Observable<any> {
    const url = `${this.phoneBookUrl}/${id}`;
    return this.http.delete<PhoneBook>(url, this.httpOptions)
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
