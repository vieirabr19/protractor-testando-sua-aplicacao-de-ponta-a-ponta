import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserService } from '../user/user.service';

const HTTP_HOST = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  autentications(userName: string, password: string) {
    return this.http.post(`${HTTP_HOST}/user/login`, {userName, password}, {observe: 'response'})
    .pipe(
      tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        // console.log(`User ${userName} authenticated with token ${authToken}`);
      })
    )
  }
}
