import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { OSW_TABS_DIRECTIVES, Tab } from '@osw/tabs/tabs';
import { OSW_STYLES } from '@osw/styles.ts';

@Component({
	selector: 'epitracker',
	directives: [
		OSW_TABS_DIRECTIVES,
		ROUTER_DIRECTIVES
	],
	template: `
		<osw-tabbar [tabs]="tabs"></osw-tabbar>
	`,
	styles: [
		OSW_STYLES
	]
})
export class EpiMain {
	tabs: Tab[];

	constructor() {
		this.tabs = [
			new Tab('flaticon-note', 'List', 'list'),
			new Tab('flaticon-home', 'Home', 'home'),
			new Tab('flaticon-settings', 'Settings', 'settings')
		]
	}
};