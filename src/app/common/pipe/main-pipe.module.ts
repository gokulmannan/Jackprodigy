import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { KeysPipe } from './KeysPipe';
import { OrderByPipe } from './orderbyPipe';
import { GroupByPipe } from './groupByPipe';


@NgModule({
  declarations: [KeysPipe, OrderByPipe, GroupByPipe],
  imports: [CommonModule],
  exports: [KeysPipe, OrderByPipe, GroupByPipe]
})

export class MainPipe { }