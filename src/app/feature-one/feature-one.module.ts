import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureOneComponent } from './feature-one.component';
import { FeatureOneRoutes } from './feature-one.routes';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [FeatureOneComponent, TempComponent],
  imports: [CommonModule, RouterModule.forChild(FeatureOneRoutes)]
})
export class FeatureOneModule {}
