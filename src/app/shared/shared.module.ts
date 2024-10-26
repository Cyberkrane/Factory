import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
// Components
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatTooltipModule,
    MatCardModule
  ],
  exports:[
    HeaderComponent,
    
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatTooltipModule,
    MatCardModule
  ]
})
export class SharedModule { }
