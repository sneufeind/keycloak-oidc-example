import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  constructor(private router: Router) { }

  navigateToUser(): void {
    this.router.navigateByUrl(environment.paths.user);
  }

  navigateToAdmin(): void {
    this.router.navigateByUrl(environment.paths.admin);
  }
}
