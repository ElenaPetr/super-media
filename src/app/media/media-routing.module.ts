import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MediaListComponent} from './list/media-list.component';


const mediaRoutes: Routes = [
	{path: 'media', component: MediaListComponent},
];
@NgModule ({
	imports:[RouterModule.forChild(mediaRoutes)],
	exports:[RouterModule],
})
export class MediaRoutingModule {}