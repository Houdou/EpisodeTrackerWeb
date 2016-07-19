import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OSW_TABLE_DIRECTIVES, Cell } from '@osw/table/table';

import { BangumiCellComponent } from './bangumi.cell.component';

@Component({
	selector: 'epi-list-table',
	template: `
		<osw-table [tableStyle]="'default'">
			<osw-table-list>
				<template osw-table-list-content>
					<epi-list-bangumi-cell *ngFor="let cell of cells; let i = index"
						[cell]="cell"
						(touchstart)="onTouchStart($event, i)"
						(touchmove)="onTouchMove($event, i)"
						(selected)="onSelected($event)">
					</epi-list-bangumi-cell>
				</template>
			</osw-table-list>
		</osw-table>
	`,
	directives: [
		OSW_TABLE_DIRECTIVES,
		BangumiCellComponent
	]
})
export class EpiListTableComponent {
	cells: Cell[];
	target: Cell;

	touches = {
		startX: 0,
		startY: 0,
		currentX: 0,
		currentY: 0
	};
	scrolling: boolean = true;

	constructor(private router: Router) {
		this.cells = [
			new Cell("My item 0", ""),
			new Cell("My item 1", ""),
			new Cell("My item 2", ""),
			new Cell("My item 3", ""),
			new Cell("My item 4", ""),
			new Cell("My item 5", ""),
			new Cell("My item 6", ""),
			new Cell("My item 7", ""),
			new Cell("My item 8", ""),
		];
	}

	onTouchStart(event: TouchEvent) {
		this.touches.startX = event.targetTouches[0].pageX;
		this.touches.startY = event.targetTouches[0].pageY;

		this.scrolling = false;
	}
	onTouchMove(event: TouchEvent): void {
		this.touches.currentX = event.targetTouches[0].pageX;
		this.touches.currentY = event.targetTouches[0].pageY;

		let touchAngle = Math.atan2(Math.abs(this.touches.currentY - this.touches.startY), Math.abs(this.touches.currentX - this.touches.startX)) * 180 / Math.PI;
		this.scrolling = touchAngle > 45;
	}
	onSelected(cell: Cell): void {
		if(this.scrolling) { return; }

		this.router.navigate(['/home', cell.path]);	
	}
}