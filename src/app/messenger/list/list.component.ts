import { Component, computed, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { NotificationService } from '../../service';
import { MCNotificationListing } from '../../noti-list.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NOTIFICATION_LIST } from '../../constant';
import { Router } from '@angular/router';
import { MCNameListing } from '../../name-list.model';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    ButtonModule,
    CommonModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(
    private _notificationService: NotificationService,
    private _router: Router
  ) {}
  // notificationList = [
  //   {
  //     name: 'John Doe',
  //     message: 'This is a sample notification message. Please check the details.',
  //     time: '2025-01-12 10:00 AM'
  //   },
  //   {
  //     name: 'Jane Smith',
  //     message: 'Your account has been successfully updated. Please log in to continue.',
  //     time: '2025-01-11 03:45 PM'
  //   },
  //   {
  //     name: 'Admin',
  //     message: 'There was a system update completed last night. Check for new features.',
  //     time: '2025-01-11 03:45 PM'}
  //   ]
  @ViewChild('notification') notificationTable!: Table;

  //Computed Signal for notification list
  public notificationList = computed<MCNotificationListing[]>(() =>
    this._notificationService.notificationListing()
  );

  public employeeId: number = 0;

  //Computed Signal for Loading
  public loading = computed(() => this._notificationService.loading());
  public notificationColumn = NOTIFICATION_LIST.TABLE_COLUMNS;

  ngOnInit() {
    this.fetchData();
  }

  /**
   * Fetch all notification list
   */
  fetchData() {
    this._notificationService.fetchNotificationList();
    this._notificationService.fetchnameList();
  }

  /**
   * Go to message create page when click on new  message button
   */
  goToCreate() {
    this._router.navigate([`/message/create`]);
  }
}
