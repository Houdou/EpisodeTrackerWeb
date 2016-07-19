import { Component } from '@angular/core';

import { OSW_NAVIGATION_DIRECTIVES } from '@osw/navigation/navigation';

@Component({
	selector: 'epi-home',
	template: `
		<osw-navigation [isTranslucent]="true" [title]="title"><osw-navigation>
	`,
	directives: [
		OSW_NAVIGATION_DIRECTIVES
	]
})
export class EpiHomeComponent {
	public title: string = "Home";

	constructor() {
	}
}