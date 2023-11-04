import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }
  hardPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).+$/;

  security(value: string): string {
    if (value.length === 0) {
      return 'low';
    }
    if (value.length < 8) {
      return 'less';
    }

    if (this.hardPassword.test(value)) {
      return 'hard';
    }

    if (/^[a-zA-Z]+$/.test(value) || /^[0-9]+$/.test(value) || /^[^a-zA-Z0-9]+$/.test(value)) {
      return 'easy';
    }

    return 'medium';
  }
}
