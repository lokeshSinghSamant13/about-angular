import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormData } from './form.data';

@Injectable({ providedIn: 'root' })
export class AppService {
  private userData = new BehaviorSubject<FormData>(null);

  constructor(private router: Router) {}

  get getFormData() {
    return this.userData.asObservable();
  }

  firstForm(name: string, email: string) {
    const formData = new FormData(name, email, '');
    this.userData.next(formData);
    this.router.navigateByUrl('/second-form');
  }

  secondForm(education: string) {
    console.log(this.userData);
    const formData = new FormData(
      this.userData.value.userName,
      this.userData.value.email,
      education
    );
    this.userData.next(formData);
  }
}
