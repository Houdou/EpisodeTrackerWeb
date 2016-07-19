import { provideRouter, RouterConfig } from '@angular/router';

import { listRoutes } from './list/list.routes';
import { homeRoutes } from './home/home.routes';
import { settingsRoutes } from './settings/settings.routes';

export const routes: RouterConfig = [
	{ path: '', redirectTo: '/home', terminal: true },
	...listRoutes,
	...homeRoutes,
	...settingsRoutes
];

export const EPI_ROUTER_PROVIDERS = [
	provideRouter(routes)
];