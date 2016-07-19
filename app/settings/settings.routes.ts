import { RouterConfig } from '@angular/router';

import { EpiSettingsComponent } from './Settings.component';
import { EpiSettingsTableComponent } from './table/table.component';
import { EpiBangumiComponent } from '../bangumi/bangumi.component';

export const settingsRoutes: RouterConfig = [
	{
		path: 'settings',
		component: EpiSettingsComponent,
		children: [
			{ path: '', component: EpiSettingsTableComponent }
		]
	}
];