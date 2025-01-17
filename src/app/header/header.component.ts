import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ListComponent } from '../messenger/list/list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, CommonModule, ListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: any[];

  constructor(private _router: Router) {
    this.items = [
      {
        label: 'All Notifications',
        icon: 'pi pi-bell',
        command: () => {
          this.showAllNotifications();
        },
      },
      {
        label: 'Unread',
        icon: 'pi pi-envelope',
        command: () => {
          this.showUnreadNotifications();
        },
      },
      {
        label: 'Starred',
        icon: 'pi pi-star',
        command: () => {
          this.showStarredNotifications();
        },
      },
    ];
  }

  showAllNotifications() {
    this._router.navigate([`/message/list`]);
  }

  showUnreadNotifications() {
    // Logic for displaying unread notifications
  }

  showStarredNotifications() {
    // Logic for displaying starred notifications
  }
}
