import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ActivityDetailPageRoutingModule } from './activity-detail-routing.module';
import { ActivityDetailPage } from './activity-detail.page';

const routes: Routes = [
  {
    path: "",
    component: ActivityDetailPage,
  },
];
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ActivityDetailPageRoutingModule, RouterModule.forChild(routes)],
  declarations: [ActivityDetailPage],
})
export class ActivityDetailPageModule {}
