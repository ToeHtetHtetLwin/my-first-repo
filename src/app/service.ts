import { Injectable, signal } from '@angular/core';
import { MCNotificationListing, MNotificationListing } from './noti-list.model';
import { FIX_NAME_LIST, FIX_NOTIFICATION_LIST } from './fixture';
import { MCNameListing, MNameListing } from './name-list.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  public loading = signal<boolean>(false);
  public notificationListing = signal<MCNotificationListing[]>([]);
  #fixnotificationList: any = FIX_NOTIFICATION_LIST;
  #mnotificationListing = new MNotificationListing();
  #fixnameList: any = FIX_NAME_LIST;
  #mnameListing = new MNameListing();
  public nameListing = signal<MCNameListing[]>([]);

  constructor() {}

  /**
   * Fetch Notification List
   */
  fetchNotificationList() {
    this.loading.set(true);
    setTimeout(() => {
      this.#mnotificationListing.setNotificationListing(
        this.#fixnotificationList
      );
      this.notificationListing.set(
        this.#mnotificationListing.getNotificationListing()
      );
      this.loading.set(false);
    }, 2000);
  }

  /**
   * Fetch Notification List
   */
  fetchnameList() {
    this.#mnameListing.setNameListing(this.#fixnameList);
    this.nameListing.set(this.#mnameListing.getNameListing());
    console.log('nameList>>>>>>>>',this.nameListing());
  }
}
