import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<h2 style="color:blue;">My {{name}} project (persons management)</h2>
	<br>
	   <router-outlet></router-outlet>`,
})

/**
 * A main component of application
 */
export class AppComponent { 
	
	name = 'Angular 2';

}
