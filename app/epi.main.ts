import { Component } from '@angular/core';

import { OSW_TABS_DIRECTIVES, Tab } from '@osw/tabs/tabs';
import { OSW_STYLES } from '@osw/styles.ts';

@Component({
	selector: 'epitracker',
	directives: [
		OSW_TABS_DIRECTIVES
	],
	template: `
		<osw-tabbar [tabs]="tabs" [isTranslucent]="true"></osw-tabbar>
	`,
	styles: [
		OSW_STYLES
	]
})
export class EpiMain {
	public tabs: Tab[];

	constructor() {
		this.tabs = [
			new Tab('flaticon-note', 'List', 'list'),
			new Tab('flaticon-home', 'Home', 'home', true),
			new Tab('flaticon-settings', 'Settings', 'settings')
		];
	}
};