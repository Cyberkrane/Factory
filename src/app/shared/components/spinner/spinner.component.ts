import { Component, OnInit } from '@angular/core';
import { SpinnerStore } from 'src/app/core/stores/spinner.store.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  // Observa el estado del spinner desde SpinnerStore
  public isLoading$ = this.spinnerStore.isLoading$;

  constructor(private readonly spinnerStore: SpinnerStore) {}

  ngOnInit(): void {
  console.log("spinner");
  }

}
