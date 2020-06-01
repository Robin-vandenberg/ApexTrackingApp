import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApexApiService {
  private apiKey = environment.API_KEY;

  constructor(private http: HttpClient) {}

  public getPlayerData(): Observable<any> {
    return this.http.get(`https://api.mozambiquehe.re/bridge?version=4&platform=PS4&player=Robinofskii&auth=${this.apiKey}`);
  }
}
