import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './messenger/list/list.component';
import { CreateComponent } from './messenger/create/create.component';
import { DetailsComponent } from './messenger/details/details.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'message',
    children: [
      {
        path: 'list', // Default to message list
        component: ListComponent,
      },
      {
        path: 'header', // Default to message list
        component:HeaderComponent,
      },
      {
        path: 'create', // Create new message
        component: CreateComponent,
      },
      {
        path: 'detail/:id', // View message details
        component: DetailsComponent,
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' }, // Redirect to message list
    ],
  },
];
