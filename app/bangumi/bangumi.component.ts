import { Component } from '@angular/core';

import { OSW_SCROLL_DIRECTIVES } from '@osw/scroll/scroll';

@Component({
	selector: 'epi-bangumi',
	template: `
		<osw-scroll>
			<template osw-scroll-view>
				<h2>Detail</h2>
			</template>
		</osw-scroll>
	`,
	directives:[
		OSW_SCROLL_DIRECTIVES
	]
})
export class EpiBangumiComponent {
	
}