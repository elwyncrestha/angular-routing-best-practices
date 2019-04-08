import { Routes } from '@angular/router';
import { FeatureOneComponent } from './feature-one.component';
import {TempComponent} from "./temp/temp.component";

export const FeatureOneRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature-one-component'
  },
  {
    path: 'feature-one-component',
    component: FeatureOneComponent
  },
  {
    path: 'temp',
    component: TempComponent
  }
];
