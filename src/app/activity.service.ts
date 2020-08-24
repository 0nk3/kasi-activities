import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IActivities } from './../activities';

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  private activitiesUrl = "api/activity/activities.json";
  constructor(private httpClient: HttpClient) {}

  getActivity(id: number) {
    const url = `${this.activitiesUrl}/${id}`;
    return this.httpClient.get<IActivities>(url).pipe(
      tap((_) => this.log(`fetched activity id=${id}`)),
      catchError(this.handleError)
    );
  }
  private log(message: string) {
    console.log(message);
  }
  getAllActivities(): Observable<IActivities[]> {
    return this.httpClient.get<IActivities[]>(this.activitiesUrl).pipe(
      tap((data) => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    // this should be cahneged to a logging framework rather
    // than simply logging to console
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // failure response from the backend
      errorMessage = `Server returned code ${err.status}, error message is : ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
