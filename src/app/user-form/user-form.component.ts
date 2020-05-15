import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CountryService } from './country.service';
import { onlyText, verifyEmail, verifyPhone } from './formRegex';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  genders = ['Mujer', 'Hombre'];
  countries: {};
  showModal = false;

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountryService
  ) {}

  ngOnInit() {
    this.countriesService
      .getAllCountries()
      .subscribe((data) => (this.countries = data));
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(onlyText)]],
      lastName: [null, [Validators.required, Validators.pattern(onlyText)]],
      email: [null, [Validators.required, Validators.pattern(verifyEmail)]],
      country: [null, Validators.required],
      gender: [null, Validators.required],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(verifyPhone),
        ],
      ],
    });
  }

  onSubmit() {
    this.showModal = true;
  }
}
