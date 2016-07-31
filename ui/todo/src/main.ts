/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/underscore/index.d.ts" />
declare var $;
declare var _;

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideForms, disableDeprecatedForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provideForms(),
  disableDeprecatedForms(),
  {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
