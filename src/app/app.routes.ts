import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes );
