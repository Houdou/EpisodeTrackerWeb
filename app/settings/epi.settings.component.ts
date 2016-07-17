import { Component } from '@angular/core';

import { OSW_NAVIGATION_DIRECTIVES } from '@osw/navigation/navigation';
import { OSW_TABLE_DIRECTIVES } from '@osw/table/table';
import { Cell, CellComponent } from '@osw/table/cell.component';

@Component({
	selector: 'epi-settings',
	template: `
		<osw-navigation [isTranslucent]="true" [title]="title">
			<template osw-navigation-view>
				<osw-table [tableStyle]="'default'">
					<osw-table-list>
						<template osw-table-list-content>
							<osw-table-cell *ngFor="let cell of cells" [cell]="cell">
								{{cell.content}}
							</osw-table-cell>
						</template>
					</osw-table-list>
				</osw-table>
			</template>
		<osw-navigation>
	`,
	directives: [
		OSW_NAVIGATION_DIRECTIVES,
		OSW_TABLE_DIRECTIVES,
		CellComponent
	]
})
export class EpiSettingsComponent {
	title: string = "Settings";

	cells: Cell[];

	constructor() {
		this.cells = [
			new Cell("Settings 0"),
			new Cell("Settings 1"),
			new Cell("Settings 2"),
			new Cell("Settings 3"),
		];
	}
}