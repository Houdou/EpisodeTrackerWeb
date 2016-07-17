import { Component } from '@angular/core';

import { OSW_NAVIGATION_DIRECTIVES } from '@osw/navigation/navigation';
import { OSW_TABLE_DIRECTIVES } from '@osw/table/table';
import { Cell, CellComponent } from '@osw/table/cell.component';

@Component({
	selector: 'epi-home',
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
export class EpiHomeComponent {
	public title: string = "Home";

	cells: Cell[];

	constructor() {
		this.cells = [
			new Cell("Table row 0"),
			new Cell("Table row 1"),
			new Cell("Table row 2"),
			new Cell("Table row 3"),
			new Cell("Table row 4"),
			new Cell("Table row 5"),
			new Cell("Table row 6"),
			new Cell("Table row 7"),
			new Cell("Table row 8"),
			new Cell("Table row 9"),
			new Cell("Table row 10"),
			new Cell("Table row 11"),
			new Cell("Table row 12"),
			new Cell("Table row 13"),
			new Cell("Table row 14"),
			new Cell("Table row 15"),
			new Cell("Table row 16"),
			new Cell("Table row 17"),
			new Cell("Table row 18"),
			new Cell("Table row 19"),
			new Cell("Table row 20"),
			new Cell("Table row 21"),
			new Cell("Table row 22"),
			new Cell("Table row 23"),
			new Cell("Table row 24"),
			new Cell("Table row 25"),
			new Cell("Table row 26"),
			new Cell("Table row 27"),
			new Cell("Table row 28"),
			new Cell("Table row 29"),
			new Cell("Table row 30"),
			new Cell("Table row 31"),
			new Cell("Table row 32"),
			new Cell("Table row 33"),
			new Cell("Table row 34"),
			new Cell("Table row 35"),
			new Cell("Table row 36"),
			new Cell("Table row 37"),
			new Cell("Table row 38"),
			new Cell("Table row 39"),
			new Cell("Table row 40"),
			new Cell("Table row 41"),
			new Cell("Table row 42"),
			new Cell("Table row 43"),
			new Cell("Table row 44"),
			new Cell("Table row 45"),
			new Cell("Table row 46"),
			new Cell("Table row 47"),
			new Cell("Table row 48"),
			new Cell("Table row 49"),
			new Cell("Table row 50"),
			new Cell("Table row 51"),
			new Cell("Table row 52"),
			new Cell("Table row 53"),
			new Cell("Table row 54"),
			new Cell("Table row 55"),
			new Cell("Table row 56"),
			new Cell("Table row 57"),
			new Cell("Table row 58"),
			new Cell("Table row 59"),
			new Cell("Table row 60"),
			new Cell("Table row 61"),
			new Cell("Table row 62"),
			new Cell("Table row 63"),
			new Cell("Table row 64"),
			new Cell("Table row 65"),
			new Cell("Table row 66"),
			new Cell("Table row 67"),
			new Cell("Table row 68"),
			new Cell("Table row 69"),
			new Cell("Table row 70"),
			new Cell("Table row 71"),
			new Cell("Table row 72"),
			new Cell("Table row 73"),
			new Cell("Table row 74"),
			new Cell("Table row 75"),
			new Cell("Table row 76"),
			new Cell("Table row 77"),
			new Cell("Table row 78"),
			new Cell("Table row 79"),
			new Cell("Table row 80"),
			new Cell("Table row 81"),
			new Cell("Table row 82"),
			new Cell("Table row 83"),
			new Cell("Table row 84"),
			new Cell("Table row 85"),
			new Cell("Table row 86"),
			new Cell("Table row 87"),
			new Cell("Table row 88"),
			new Cell("Table row 89"),
			new Cell("Table row 90"),
			new Cell("Table row 91"),
			new Cell("Table row 92"),
			new Cell("Table row 93"),
			new Cell("Table row 94"),
			new Cell("Table row 95"),
			new Cell("Table row 96"),
			new Cell("Table row 97"),
			new Cell("Table row 98"),
			new Cell("Table row 99"),
		];
	}
}