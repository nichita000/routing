import { NgModule } from '@angular/core';
import { UsersListComponent } from './list.componen';
import { CommonModule } from '@angular/common';
import { usersRoutong } from './users.routing';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    UsersListComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    usersRoutong
  ]
})
export class UsersModule {};