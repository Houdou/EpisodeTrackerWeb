import { Component } from '@angular/core';

import { OSW_NAVIGATION_DIRECTIVES } from '@osw/navigation/navigation';

@Component({
	selector: 'epi-list',
	template: `
		<osw-navigation [isTranslucent]="true" [title]="title"><osw-navigation>
	`,
	directives: [
		OSW_NAVIGATION_DIRECTIVES
	]
})
export class EpiListComponent {
	public title: string = "List";

	constructor() {
	}
}