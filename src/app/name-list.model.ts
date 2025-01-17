import { signal } from '@angular/core';

/**
 * Notification Listing model contract
 */
export type MCNameListing = {
  id: number;
  name: string;
};

/**
 * Notification Listing model
 */
export class MNameListing {
  private initialData: MCNameListing = {
    id: 0,
    name: '',
  };

  private _nameListing = signal<Required<MCNameListing[]>>([]);

  /**
   * Return Notification Listing.
   *
   * @return MCNotificationListing | undefined | null
   */
  getNameListing(): MCNameListing[] {
    return this._nameListing();
  }

  /**
   * Set the NotificationListing .
   *
   * @param NotificationListing MCNotificationListing
   */
  setNameListing(listings: MCNameListing[]): void {
    const updatedData = listings.map((item) => ({
      ...this.initialData,
      ...item,
    }));
    this._nameListing.set(updatedData);
  }
}
