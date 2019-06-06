import { Route, RouterModule } from '@angular/router';
import { ExComponent } from './ex.component';
import { ModuleWithProviders } from '@angular/core';
import { SecComponent } from './sec.component';
import { ExChildComponent } from './ex-child.component';

const appRoutes: Route[] = [
  { path: 'ex', component: ExComponent, children: [
    { path: '', component: ExChildComponent }
  ] },
  { path: 'sec', component: SecComponent },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: '**', redirectTo: 'ex' }
];

export const routesModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);