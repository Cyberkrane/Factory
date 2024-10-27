import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerStore } from './stores/spinner.store.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SpinnerStore
  ]
})
export class CoreModule { }
