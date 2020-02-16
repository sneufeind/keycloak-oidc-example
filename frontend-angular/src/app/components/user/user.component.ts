import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  desiredRole = environment.idp.roles.user;
  name$: Observable<string>;
  response$: Observable<string>;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.response$ = of('Click the button to call an endpoint!');
    this.name$ = this.http.get(environment.endpoints.greet_user, {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse): Observable<string> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    if (error.status === 403) {
      return of('Sorry, you\'re not authorized!');
    } else {
      return throwError('Something bad happened; please try again later.');
    }
  }

  private callEndpoint(url: string): Observable<string> {
    return this.http.get(url, {responseType: 'text'}).pipe(
      catchError(this.handleError),
    );
  }

  callUserEndpoint(): void {
    this.response$ = this.callEndpoint(environment.endpoints.greet_user);
  }

  callAdminEndpoint(): void {
    this.response$ = this.callEndpoint(environment.endpoints.greet_admin);
  }

  navigateToPublic(): void {
    this.router.navigateByUrl(environment.paths.public);
  }
}
