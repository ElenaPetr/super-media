import {Component,Input, Output, EventEmitter} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {ModalMediaComponent} from '../modal/modal-media.component';
import {Media} from './../media';
import {MediaService} from '../media.service';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls:['./media-card.component.css']
})
export class MediaCardComponent {
 
	constructor(private mediaService:MediaService,
				private modalService:NgbModal) {}

	@Input() media:Media;
	@Output() onDelete = new EventEmitter<Media>();
	
	delete(media:Media) {
		console.log('child delete media' + media.id);
		this.mediaService.delete(media).subscribe(
				deletedMedia => this.onDelete.emit(deletedMedia)
			);
	}

	open(media:Media) {
		const modalContent = this.modalService.open(ModalMediaComponent);
		const modalInstance = modalContent.componentInstance;
		modalInstance.media = media;
		modalContent.result.then((media) => {
			if(media) {
				this.media = media;
			}
		}, (media) => {});	
	}
}