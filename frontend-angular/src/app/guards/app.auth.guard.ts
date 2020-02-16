import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard extends KeycloakAuthGuard {

  constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (!this.authenticated) {
        this.keycloakAngular.login();
        return;
      }

      if ( this.checkUserRoles(route.data.roles) ) {
        resolve(true); // authorized
      } else {
        console.warn('access not not allowed!');
        resolve(false); // unauthorized
        // this.router.navigate([ environment.paths.public ]); // alternative
      }
    });
  }

  private checkUserRoles(requiredRoles: string[]): boolean {
    let granted = false;
    if (!requiredRoles || requiredRoles.length === 0) { // no role required
      granted = true;
    } else {
      for (const requiredRole of requiredRoles) {
        if (this.roles.indexOf(requiredRole) > -1) { // has role
          granted = true;
          break;
        }
      }
    }
    return granted;
  }
}
