import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExComponent } from './ex.component';
import { routesModule } from './app.routing';
import { SecComponent } from './sec.component';
import { ExChildComponent } from './ex-child.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    ExComponent,
    ExChildComponent,
    SecComponent
  ],
  imports: [
    BrowserModule,
    routesModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
