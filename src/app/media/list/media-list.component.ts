import {Component, OnInit} from '@angular/core';

import {Media} from './../media';
import {MediaService} from '../media.service';

@Component({
  selector: 'media-list',
  templateUrl: './media-list.component.html',
  styleUrls:['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

	mediaList:Media[];

	constructor(private mediaService:MediaService) {}

	ngOnInit() {
		console.log('init mediaList');
		this.getMediaList();
	}

	getMediaList() {
		console.log('get mediaList from component');
		this.mediaService.getList().subscribe(
			mediaListData => this.mediaList = mediaListData,
			error => console.log(<any> error)
		);
	}

	onDelete(media: Media) {
		console.log('parent on delete' + media.id);
		this.mediaList = this.mediaList.filter(m => m !== media);
	}

	onAdd(media:Media) {
		console.log('add media ' + media.url);
		this.mediaList.unshift(media);
	}

	onUpdate(media:Media) {
		console.log('update media ' + media.url);
	}
}