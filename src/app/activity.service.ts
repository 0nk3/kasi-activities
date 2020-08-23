import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IActivities } from './../activities';

const APIurl = "api/activity/activities.json";
@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private httpClient: HttpClient) {}

  // get a specific element in the data given an id
  // TODO : poorly implemented
  getActivity(activityId: number) {
    return this.httpClient.get(APIurl + "/id" + activityId);
  }
  // get all the data
  getAllActivities(): Observable<IActivities[]> {
    return this.httpClient.get<IActivities[]>(APIurl).pipe(
      tap((data) => console.log("All : " + JSON.stringify(data))),
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
      // failure response from backend
      errorMessage = `Server returned code ${err.status}, error message is : ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
