import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OSW_SCROLL_DIRECTIVES } from '@osw/scroll/scroll';
import { Cell } from '@osw/table/cell.component';

@Component({
	selector: 'epi-home-bangumi-cell',
	template: `
		<osw-scroll [isHorizontal]="true">
			<template osw-scroll-view>
				<div class="epi-home-bangumi-cell-wrapper"
					(touchstart)="onSelect($event)"
					(touchmove)="onMove($event)"
					(touchend)="onMoveEnd($event)">
					<div class="epi-home-bangumi-cell-title">
						{{cell.content}}
					</div>
				</div>
			</template>
		</osw-scroll>
	`,
	styles: [`
		:host {
			display: -webkit-flex;
			display: flex;
			height: 48px;
			width: 100%;

			align-items: center;
		}
		.epi-home-bangumi-cell-wrapper:after {
			position: absolute;
			left: 16px;
			right: 0;
			content: '';
			height: 47px;
			width: auto;
			border-bottom: solid 1px #C8C7CC;

			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
		}
		/* Retina */
		@media only screen and (-webkit-min-device-pixel-ratio: 2.0),
		only screen and (min-device-pixel-ratio: 2.0) {
		    .epi-home-bangumi-cell-wrapper:after {
		        -webkit-transform: scaleY(0.5);
		        transform: scaleY(0.5);
		    }
		}
		.epi-home-bangumi-cell-wrapper {
			display: -webkit-flex;
			display: flex;
			height: 48px;
			width: 100%;

			align-items: center;
			background-color: #FFFFFF;
		}
		.epi-home-bangumi-cell-title {
			margin-left: 16px;
			font-size: 18px;
		}
	`],
	directives: [
		OSW_SCROLL_DIRECTIVES
	]
})
export class BangumiCellComponent {
	@Input() cell: Cell;
	@Output() selected = new EventEmitter<Cell>();

	touches = {
		startX: 0,
		startY: 0,
		currentX: 0,
		currentY: 0
	};
	scrolling: boolean;
	isMoved: boolean;

	onSelect(event: TouchEvent) {
		this.touches.startX = event.targetTouches[0].pageX;
		this.touches.startY = event.targetTouches[0].pageY;

		this.scrolling = false;
		this.isMoved = false;
	}
	onMove(event: TouchEvent): void {
		this.touches.currentX = event.targetTouches[0].pageX;
		this.touches.currentY = event.targetTouches[0].pageY;

		let touchAngle = Math.atan2(Math.abs(this.touches.currentY - this.touches.startY), Math.abs(this.touches.currentX - this.touches.startX)) * 180 / Math.PI;
		let moveDistance = Math.hypot(this.touches.currentY - this.touches.startY, this.touches.currentX - this.touches.startX);

		this.scrolling = touchAngle < 45;
		this.isMoved = this.isMoved || moveDistance > 10;
	}
	onMoveEnd(event: TouchEvent): void {
		if(this.scrolling || this.isMoved) { return; }

		this.selected.emit(this.cell);
	}
}