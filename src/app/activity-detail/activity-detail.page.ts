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
  activityID: number;
  activityDetail: Observable<IActivities>;
  constructor(private activityService: ActivityService, activatedRoute: ActivatedRoute) {
    const activityID = activatedRoute.snapshot.params.activityID;
    // console.log(activityID);  //which activity is clicked
  }

  ngOnInit() {
    this.activityDetail = this.activityService.getActivity(this.activityID);
  }
}
