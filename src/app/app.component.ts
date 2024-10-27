import { Component } from '@angular/core';
import { SpinnerStore } from './core/stores/spinner.store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SpinnerStore]
})
export class AppComponent {
 
  public spinnerOnState$ = this.spinnerStore.isLoading$

  constructor(public spinnerStore: SpinnerStore) { }

}
