import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { EpiMain } from './epi.main';
import { EPI_ROUTER_PROVIDERS } from './epi.routes';
import { HTTP_PROVIDERS } from '@angular/http';

// enableProdMode();

bootstrap(EpiMain, [
	HTTP_PROVIDERS,
	EPI_ROUTER_PROVIDERS
]);

declare var FastClick;
FastClick.attach(document.body);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/