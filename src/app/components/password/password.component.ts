import { Component, OnInit } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor(public passwordService: PasswordService) { }
  ngOnInit(): void {

  }
  password = ''
  securityCheck = 'low'
  show = false

  enterPassword(value: string) {
    this.securityCheck = this.passwordService.security(value)
    console.log("🚀  password:", value);

  }
}
