import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { CarItemComponent } from './car-item/car-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CarComponent,
    CarItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CarComponent]
})
export class CarModule { }
