import { Component } from '@angular/core';

import { OSW_NAVIGATION_DIRECTIVES } from '@osw/navigation/navigation';
import { OSW_TABLE_DIRECTIVES } from '@osw/table/table';
import { Cell, CellComponent } from '@osw/table/cell.component';

@Component({
	selector: 'epi-list',
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
export class EpiListComponent {
	title: string = "List";

	cells: Cell[];

	constructor() {
		this.cells = [
			new Cell("My item 0"),
			new Cell("My item 1"),
			new Cell("My item 2"),
			new Cell("My item 3"),
			new Cell("My item 4"),
			new Cell("My item 5"),
			new Cell("My item 6"),
			new Cell("My item 7"),
			new Cell("My item 8"),
			new Cell("My item 9"),
			new Cell("My item 10"),
			new Cell("My item 11"),
		];
	}

}