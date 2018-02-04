import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerAsCustomElements } from '@angular/elements';

import { LoadingModule } from './loading.module';
import { LoadingComponent } from './loading.component';

registerAsCustomElements([LoadingComponent], () =>
  platformBrowserDynamic().bootstrapModule(LoadingModule)
);
