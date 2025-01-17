import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public logInForm!: FormGroup;
  
  constructor(private _router: Router) {}

  ngOnInit() {
    this.initSubscribe();
  }

  /**
   * Initialize the subscription
   */
  initSubscribe() {
    this.checkValidationForm();
  }

  /**
   * Check Form Validation
   */
  checkValidationForm(): void {
    this.logInForm = new FormGroup({
      name: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
    });
  }

  /**
   * Go To Main Page when click on log In button
   */
  goToHeader() {
    this._router.navigate([`/message/header`]);
  }
}
