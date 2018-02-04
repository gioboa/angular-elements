import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './loading.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [LoadingComponent],
  entryComponents: [LoadingComponent]
})
export class LoadingModule {
  ngDoBootstrap() {}
}
