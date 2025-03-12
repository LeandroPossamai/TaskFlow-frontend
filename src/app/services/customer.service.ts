import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'https://api.exemplo.com/customers'; // Substitua pela URL correta

  constructor(private http: HttpClient) {}

  getCustomersLarge(): Promise<any[]> {
    return this.http
      .get<any[]>(this.apiUrl)
      .toPromise()
      .then((data) => data || []);
  }
}
