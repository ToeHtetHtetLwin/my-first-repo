import { Component, computed } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FileUploadModule } from 'primeng/fileupload';

import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-notification-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  imports: [
    DropdownModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    CardModule,
    CommonModule,
  ],
})
export class CreateComponent {
  public langData: any;
  public createForm!: FormGroup;
  public payload: any;

  public employeeList: any;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    // this.checkValidationForm();
    this.fetchData();
    this.initSubscribe();
  }

  /**
   * Initialize the  Subscription
   */
  initSubscribe(): void {}

  /**
   * Check Form Validation for create
   */
  // checkValidationForm(): void {
  //   this.createForm = new FormGroup({
  //     from: new FormControl('', Validators.required),
  //     to: new FormControl('', Validators.required),
  //     cc: new FormControl('', Validators.required),
  //     subject: new FormControl('', Validators.required),
  //     message: new FormControl('', Validators.required),
  //   });
  // }

  /**
   * Fetch All Data
   */
  fetchData(): void {}

  /**
   * Retrieve Employee List from dropdown
   */

  /**
   * Show messgae when click on send button
   */
  createNotification(): void {}
}
