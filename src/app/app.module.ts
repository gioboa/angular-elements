import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [BrowserModule],
  entryComponents: [LoadingComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customLoading = createCustomElement(LoadingComponent, { injector });
    customElements.define('gioboa-loading-widget', customLoading);
  }

  ngDoBootstrap() {}
}
