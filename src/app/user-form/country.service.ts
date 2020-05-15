import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  baseUrl = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(this.baseUrl);
  }
}
