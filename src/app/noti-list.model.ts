import { signal } from '@angular/core';

/**
 * Notification Listing model contract
 */
export type MCNotificationListing = {
  id: number;
  name: string;
  message: string;
  time: string;
  isStarred: boolean;
};

/**
 * Notification Listing model
 */
export class MNotificationListing {
  private initialData: MCNotificationListing = {
    id: 0,
    name: '',
    message: '',
    time: '',
    isStarred: false,
  };

  private _notificationListing = signal<Required<MCNotificationListing[]>>([]);

  /**
   * Return Notification Listing.
   *
   * @return MCNotificationListing | undefined | null
   */
  getNotificationListing(): MCNotificationListing[] {
    return this._notificationListing();
  }

  /**
   * Set the NotificationListing .
   *
   * @param NotificationListing MCNotificationListing
   */
  setNotificationListing(listings: MCNotificationListing[]): void {
    const updatedData = listings.map((item) => ({
      ...this.initialData,
      ...item,
    }));
    this._notificationListing.set(updatedData);
  }
}
