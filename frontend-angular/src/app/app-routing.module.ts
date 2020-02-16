import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthGuard } from './guards/app.auth.guard';
import { environment } from 'src/environments/environment';
import { AdminComponent } from './components/admin/admin.component';
import { PublicComponent } from './components/public/public.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: environment.paths.public,
    component: PublicComponent,
  },
  {
    path: environment.paths.admin,
    component: AdminComponent,
    canActivate: [ AppAuthGuard ],
    data: { roles: [ environment.idp.roles.admin ] },
  },
  {
    path: environment.paths.user,
    component: UserComponent,
    canActivate: [ AppAuthGuard ],
    data: { roles: [ environment.idp.roles.user ] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard],
})
export class AppRoutingModule { }
