import { Component } from '@angular/core';

import { TABLE_DIRECTIVES } from '@osw/table/table';
import { Cell, CellComponent } from '@osw/table/cell.component';

@Component({
	selector: 'epi-home',
	template: `
		<osw-table [tableStyle]="'default'">
			<osw-table-list>
				<template osw-table-list-content>
					<osw-table-cell *ngFor="let cell of cells" [cell]="cell">
						{{cell.content}}
					</osw-table-cell>
				</template>
			</osw-table-list>
		</osw-table>
	`,
	directives: [
		TABLE_DIRECTIVES,
		CellComponent
	]
})
export class EpiHomeComponent {
	cells: Cell[];

	constructor() {
		this.cells = [
			new Cell("table row 1"),
			new Cell("table row 2"),
			new Cell("table row 3")
		];
	}
}