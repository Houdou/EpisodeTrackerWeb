import { RouterConfig } from '@angular/router';

import { EpiListComponent } from './list.component';
import { EpiListTableComponent } from './table/table.component';
import { EpiBangumiComponent } from '../bangumi/bangumi.component';

export const listRoutes: RouterConfig = [
	{
		path: 'list',
		component: EpiListComponent,
		children: [
			{ path: ':id', component: EpiBangumiComponent, terminal: true },
			{ path: '', component: EpiListTableComponent }
		]
	}
];