import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "api/activity/activities.json";
@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private httpClient: HttpClient) {}

  getActivity() {}
  getAllActivities() {
    return this.httpClient.get(API);
  }
}
