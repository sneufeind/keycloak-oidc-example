import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-angular';

  constructor(private keycloakService: KeycloakService) {}

  getUsername(): string {
    return this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout();
  }
}
