import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IActivities } from 'src/activities';

import { ActivityService } from './../activity.service';

@Component({
  selector: "app-activity-detail",
  templateUrl: "./activity-detail.page.html",
  styleUrls: ["./activity-detail.page.scss"],
})
export class ActivityDetailPage implements OnInit {
  // activityID: number;
  activityDetail: Observable<IActivities>;

  constructor(activityService: ActivityService, activatedRoute: ActivatedRoute) {
    const activityID = activatedRoute.snapshot.params.activityID;
    console.log("clicked " + activityID); // which activity is clicked
    this.activityDetail = activityService.getActivity(activityID);
    console.log("data : " + activityService.getActivity(3));
    console.log(JSON.stringify(activityService.getActivity(activityID)));
  }

  ngOnInit() {}
}
