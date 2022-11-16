import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Components from './components';

@NgModule({
  declarations: [
    Components.AuthContainerComponent,
    Components.LargePostComponent,
    Components.MiniPostComponent
  ],
  imports: [CommonModule],
  exports: [
    Components.AuthContainerComponent,
    Components.LargePostComponent,
    Components.MiniPostComponent,
  ]
})
export class SharedModule { }
