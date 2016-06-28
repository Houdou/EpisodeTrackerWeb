import { provideRouter, RouterConfig } from '@angular/router';

import { EpiListComponent } from './list/epi.list.component';
import { EpiHomeComponent } from './home/epi.home.component';
import { EpiSettingsComponent } from './settings/epi.settings.component';

export const routes: RouterConfig = [
	{ path: '', redirectTo: '/home', terminal: true },
	{ path: 'list', component: EpiListComponent },
	{ path: 'home', component: EpiHomeComponent, terminal: true },
	{ path: 'settings', component: EpiSettingsComponent }
];

export const EPI_ROUTER_PROVIDERS = [
	provideRouter(routes)
];