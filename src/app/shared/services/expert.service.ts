import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Expert } from '../models/expert';
import { environment } from 'src/environments/environment';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  constructor(private http: HttpClient) { }

  getExperts(): Observable<Expert[]>{
    return this.http.get<any>(`${environment.api_endpoint}/experts`).pipe(
      map(res => res.data),
      tap(received =>
        {
          //console.log(`receivedExperts = ${JSON.stringify(received)}`);
        }),
      catchError(error => of([]))
    );
  }

}
