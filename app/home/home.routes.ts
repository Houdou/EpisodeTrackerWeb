import { RouterConfig } from '@angular/router';

import { EpiHomeComponent } from './home.component';
import { EpiHomeTableComponent } from './table/table.component';
import { EpiBangumiComponent } from '../bangumi/bangumi.component';

export const homeRoutes: RouterConfig = [
	{
		path: 'home',
		component: EpiHomeComponent,
		children: [
			{ path: ':id', component: EpiBangumiComponent, terminal: true },
			{ path: '', component: EpiHomeTableComponent }
		]
	}
];