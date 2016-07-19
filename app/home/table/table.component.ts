import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OSW_TABLE_DIRECTIVES, Cell } from '@osw/table/table';

import { BangumiCellComponent } from './bangumi.cell.component';

@Component({
	selector: 'epi-home-table',
	template: `
		<osw-table [tableStyle]="'default'">
			<osw-table-list>
				<template osw-table-list-content>
					<epi-home-bangumi-cell *ngFor="let cell of cells; let i = index"
						[cell]="cell"
						(touchstart)="onTouchStart($event, i)"
						(touchmove)="onTouchMove($event, i)"
						(selected)="onSelected($event)">
					</epi-home-bangumi-cell>
				</template>
			</osw-table-list>
		</osw-table>
	`,
	directives: [
		OSW_TABLE_DIRECTIVES,
		BangumiCellComponent
	]
})
export class EpiHomeTableComponent {
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
			new Cell("Table row 0", "0", { id: "0" }),
			new Cell("Table row 1", "1", { id: "1" }),
			new Cell("Table row 2", "2", { id: "2" }),
			new Cell("Table row 3", "3", { id: "3" }),
			new Cell("Table row 4", "4", { id: "4" }),
			new Cell("Table row 5", "5", { id: "5" }),
			new Cell("Table row 6", "6", { id: "6" }),
			new Cell("Table row 7", "7", { id: "7" }),
			new Cell("Table row 8", "8", { id: "8" }),
			new Cell("Table row 9", "9", { id: "9" }),
			new Cell("Table row 10", "10", { id: "10" }),
			new Cell("Table row 11", "11", { id: "11" }),
			new Cell("Table row 12", "12", { id: "12" }),
			new Cell("Table row 13", "13", { id: "13" }),
			new Cell("Table row 14", "14", { id: "14" }),
			new Cell("Table row 15", "15", { id: "15" }),
			new Cell("Table row 16", "16", { id: "16" }),
			new Cell("Table row 17", "17", { id: "17" }),/*
			new Cell("Table row 18", "18", { id: "18" }),
			new Cell("Table row 19", "19", { id: "19" }),
			new Cell("Table row 20", "20", { id: "20" }),
			new Cell("Table row 21", "21", { id: "21" }),
			new Cell("Table row 22", "22", { id: "22" }),
			new Cell("Table row 23", "23", { id: "23" }),
			new Cell("Table row 24", "24", { id: "24" }),
			new Cell("Table row 25", "25", { id: "25" }),
			new Cell("Table row 26", "26", { id: "26" }),
			new Cell("Table row 27", "27", { id: "27" }),
			new Cell("Table row 28", "28", { id: "28" }),
			new Cell("Table row 29", "29", { id: "29" }),
			new Cell("Table row 30", "30", { id: "30" }),
			new Cell("Table row 31", "31", { id: "31" }),
			new Cell("Table row 32", "32", { id: "32" }),
			new Cell("Table row 33", "33", { id: "33" }),
			new Cell("Table row 34", "34", { id: "34" }),
			new Cell("Table row 35", "35", { id: "35" }),
			new Cell("Table row 36", "36", { id: "36" }),
			new Cell("Table row 37", "37", { id: "37" }),
			new Cell("Table row 38", "38", { id: "38" }),
			new Cell("Table row 39", "39", { id: "39" }),
			new Cell("Table row 40", "40", { id: "40" }),
			new Cell("Table row 41", "41", { id: "41" }),
			new Cell("Table row 42", "42", { id: "42" }),
			new Cell("Table row 43", "43", { id: "43" }),
			new Cell("Table row 44", "44", { id: "44" }),
			new Cell("Table row 45", "45", { id: "45" }),
			new Cell("Table row 46", "46", { id: "46" }),
			new Cell("Table row 47", "47", { id: "47" }),
			new Cell("Table row 48", "48", { id: "48" }),
			new Cell("Table row 49", "49", { id: "49" }),
			new Cell("Table row 50", "50", { id: "50" }),
			new Cell("Table row 51", "51", { id: "51" }),
			new Cell("Table row 52", "52", { id: "52" }),
			new Cell("Table row 53", "53", { id: "53" }),
			new Cell("Table row 54", "54", { id: "54" }),
			new Cell("Table row 55", "55", { id: "55" }),
			new Cell("Table row 56", "56", { id: "56" }),
			new Cell("Table row 57", "57", { id: "57" }),
			new Cell("Table row 58", "58", { id: "58" }),
			new Cell("Table row 59", "59", { id: "59" }),
			new Cell("Table row 60", "60", { id: "60" }),
			new Cell("Table row 61", "61", { id: "61" }),
			new Cell("Table row 62", "62", { id: "62" }),
			new Cell("Table row 63", "63", { id: "63" }),
			new Cell("Table row 64", "64", { id: "64" }),
			new Cell("Table row 65", "65", { id: "65" }),
			new Cell("Table row 66", "66", { id: "66" }),
			new Cell("Table row 67", "67", { id: "67" }),
			new Cell("Table row 68", "68", { id: "68" }),
			new Cell("Table row 69", "69", { id: "69" }),
			new Cell("Table row 70", "70", { id: "70" }),
			new Cell("Table row 71", "71", { id: "71" }),
			new Cell("Table row 72", "72", { id: "72" }),
			new Cell("Table row 73", "73", { id: "73" }),
			new Cell("Table row 74", "74", { id: "74" }),
			new Cell("Table row 75", "75", { id: "75" }),
			new Cell("Table row 76", "76", { id: "76" }),
			new Cell("Table row 77", "77", { id: "77" }),
			new Cell("Table row 78", "78", { id: "78" }),
			new Cell("Table row 79", "79", { id: "79" }),
			new Cell("Table row 80", "80", { id: "80" }),
			new Cell("Table row 81", "81", { id: "81" }),
			new Cell("Table row 82", "82", { id: "82" }),
			new Cell("Table row 83", "83", { id: "83" }),
			new Cell("Table row 84", "84", { id: "84" }),
			new Cell("Table row 85", "85", { id: "85" }),
			new Cell("Table row 86", "86", { id: "86" }),
			new Cell("Table row 87", "87", { id: "87" }),
			new Cell("Table row 88", "88", { id: "88" }),
			new Cell("Table row 89", "89", { id: "89" }),
			new Cell("Table row 90", "90", { id: "90" }),
			new Cell("Table row 91", "91", { id: "91" }),
			new Cell("Table row 92", "92", { id: "92" }),
			new Cell("Table row 93", "93", { id: "93" }),
			new Cell("Table row 94", "94", { id: "94" }),
			new Cell("Table row 95", "95", { id: "95" }),
			new Cell("Table row 96", "96", { id: "96" }),
			new Cell("Table row 97", "97", { id: "97" }),
			new Cell("Table row 98", "98", { id: "98" }),
			new Cell("Table row 99", "99", { id: "99" }),*/
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