import { Route, RouterModule } from '@angular/router';
import { UsersListComponent } from './list.componen';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ProfileComponent } from './profile.component';

const userRoutes: Route[] = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: ProfileComponent },
];

export const usersRoutong: ModuleWithProviders = RouterModule.forChild(userRoutes);